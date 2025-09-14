import { useState } from "react";
import { API_ENDPOINTS } from "../config/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(API_ENDPOINTS.contact, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert(
          "✅ " + (data.message || "Message sent successfully!Do not spam pls")
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(
          "❌ " + (data.error || data.message || "Failed to send message.")
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Error sending message. Please try later.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black dark:bg-white">
      <div className="max-w-xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-6 text-red-400 dark:text-red-600">
          Get In Touch
        </h2>
        <p className="text-gray-400 dark:text-gray-700 mb-6">
          Have a project or just want to say hi or contact me? Go ahead!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Name Field */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-red-950 text-white placeholder-red-400 dark:bg-red-100 dark:text-black focus:outline-none"
          />

          {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-red-950 text-white placeholder-red-400 dark:bg-red-100 dark:text-black focus:outline-none"
          />

          {/* Message Field */}
          <textarea
            rows="4"
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-red-950 text-white placeholder-red-400 dark:bg-red-100 dark:text-black focus:outline-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
