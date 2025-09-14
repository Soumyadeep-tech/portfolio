const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://127.0.0.1:5500", // local dev
      "http://localhost:3000", // local React dev
      "http://localhost:5173", // Vite dev server
      "http://localhost:5174", // Vite dev server alternate port
      process.env.FRONTEND_URL, // your deployed frontend
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

// Google Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Test Route
app.get("/", (req, res) => {
  res.send("✅ Backend is live and working!");
});

// Health Check Route
app.get("/health", (req, res) => {
  const healthStatus = {
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: {
      node_version: process.version,
      port: process.env.PORT || 5000,
      has_email_config: !!(process.env.EMAIL_USER && process.env.EMAIL_PASS),
      has_gemini_config: !!process.env.GEMINI_API_KEY,
    },
  };
  res.json(healthStatus);
});

// =================== CONTACT FORM ===================
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.TO_EMAIL || process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `
        <h3>New Portfolio Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p style="white-space:pre-wrap"><b>Message:</b>\n${message}</p>
      `,
    });

    return res.status(200).json({ ok: true, message: "Email sent" });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

// =================== AI CHATBOT ===================
app.post("/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  // Check if Gemini API key is configured
  if (!process.env.GEMINI_API_KEY) {
    return res.json({
      reply:
        "🤖 Sorry, the AI chatbot is currently not configured. Please contact the owner directly!",
    });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Create a chat session for better context handling
    const chat = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const reply = response.text();

    return res.json({ reply });
  } catch (err) {
    console.error("Chatbot error:", err);

    // Handle specific Gemini errors
    if (err.status === 400) {
      return res.json({
        reply: "🤖 Invalid request. Please try rephrasing your message.",
      });
    }
    if (err.status === 403) {
      return res.json({
        reply: "🤖 API access denied. Please check configuration.",
      });
    }
    if (err.status === 429) {
      return res.json({
        reply: "🤖 Too many requests. Please try again in a moment.",
      });
    }
    if (err.status === 500) {
      return res.json({
        reply:
          "🤖 Google's servers are experiencing issues. Please try again later.",
      });
    }

    return res.json({
      reply:
        "🤖 Sorry, I'm having technical difficulties. Please try again later.",
    });
  }
});

// =================== START SERVER ===================
const PORT = process.env.PORT || 5000; // ✅ Use Render's assigned port
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
