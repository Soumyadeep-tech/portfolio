console.log("main.js is running!");

document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    once: true,
  });

  // Activate Lucide icons
  lucide.createIcons();

  // Theme toggle
  const toggleThemeBtn = document.getElementById("toggleTheme");
  if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
    });
  }

  // Terminal logic
  const terminalInput = document.getElementById("terminalInput");
  const terminalOutput = document.getElementById("terminalOutput");

  const commands = {
    help: `Available commands: <br> - about <br> - projects <br> - contact <br> - resume <br> - social <br> - theme <br> - joke <br> - clear`,
    about: `I'm Soumyadeep Paul, a web developer from Jadavpur University currently studying BTech in printing and packaging. I love building cool, clean web apps.you can press social or contact to contact me . Thanks!`,
    projects: `1. Thriftopia (E-commerce)<br>2. AI Resume Builder<br>3. This Portfolio(I want to make this portfolio look better and design more)`,
    contact: `Email: soumyadeeppaul@example.com<br>GitHub: github.com/soumyadeeppaul<br>LinkedIn: linkedin.com/in/soumyadeeppaul`,
    resume: `Opening resume...<br><a href="resume.pdf" target="_blank" class="underline text-red-400 dark:text-red-600">Click here if it doesn't open automatically</a>`,
    social: `Twitter: @soumyadeep <br>Instagram: @soumyadeep.fr <br>LinkedIn: linkedin.com/in/soumyadeeppaul`,
    theme: `Switching theme...`,
    joke: `Why do programmers prefer dark mode? Because light attracts bugs!`,
    clear: "clear",
  };

  function printToTerminal(text) {
    const line = document.createElement("div");
    line.innerHTML = "&gt; ";
    terminalOutput.appendChild(line);

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        line.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }
    }, 20);
  }

  if (terminalInput && terminalOutput) {
    terminalInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const command = terminalInput.value.trim().toLowerCase();
        const userLine = document.createElement("div");
        userLine.innerHTML = `&gt; ${command}`;
        terminalOutput.appendChild(userLine);

        switch (command) {
          case "clear":
            terminalOutput.innerHTML = "";
            break;

          case "resume":
            printToTerminal(commands.resume);
            window.open("resume.pdf", "_blank");
            break;

          case "theme":
            printToTerminal(commands.theme);
            document.documentElement.classList.toggle("dark");
            break;

          default:
            if (commands[command]) {
              printToTerminal(commands[command]);
            } else {
              printToTerminal(`Command not found: ${command}`);
            }
        }

        terminalInput.value = "";
      }
    });
  }
});

// Contact form submission
// Contact form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      message: e.target.message.value.trim(),
    };

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Response status:", res.status, data);

      if (res.ok) {
        alert(
          "✅ " + (data.message || "Message sent successfully!Do not spam pls")
        );
        e.target.reset();
      } else {
        alert(
          "❌ " + (data.error || data.message || "Failed to send message.")
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Error sending message. Please try later.");
    }
  });

// ==== AI Chatbot ====
const chatBox = document.getElementById("chatbot");
const openChat = document.getElementById("openChat");
const closeChat = document.getElementById("closeChat");
const sendChat = document.getElementById("sendChat");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

openChat.addEventListener("click", () => {
  chatBox.classList.remove("hidden");
  openChat.classList.add("hidden");
});

closeChat.addEventListener("click", () => {
  chatBox.classList.add("hidden");
  openChat.classList.remove("hidden");
});

async function sendMessage() {
  const userMsg = chatInput.value.trim();
  if (!userMsg) return;

  // Show user message
  const userDiv = document.createElement("div");
  userDiv.className = "text-red-400 text-right";
  userDiv.textContent = `You: ${userMsg}`;
  chatMessages.appendChild(userDiv);

  chatInput.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;

  try {
    // Send request to backend
    const res = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMsg }),
    });

    const data = await res.json();

    // Show bot response
    const botDiv = document.createElement("div");
    botDiv.className = "text-gray-300 dark:text-gray-700";
    botDiv.textContent = `🤖 ${data.reply}`;
    chatMessages.appendChild(botDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  } catch (err) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "text-gray-500";
    errorDiv.textContent = "⚠️ Error contacting AI";
    chatMessages.appendChild(errorDiv);
  }
}

sendChat.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
