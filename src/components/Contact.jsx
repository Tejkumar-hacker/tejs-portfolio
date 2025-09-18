import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });
  const [status, setStatus] = useState(null); // ✅ success/error message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendUserMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({ type: "success", text: "Message sent successfully! 🎉" });
      setFormData({ user_name: "", user_email: "", message: "" });
    } catch (error) {
      console.error("Email send failed", error);
      setStatus({ type: "error", text: "Failed to send message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-3">Get In Touch</h2>
        <p className="text-center text-stone-400 mb-6 text-sm">
          Have a project in mind or want to chat? Feel free to reach out!
        </p>
        
        {/* Motion form */}
        <motion.form
          ref={formRef}
          onSubmit={sendUserMessage}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-stone-900/50 backdrop-blur-sm p-5 rounded-lg border border-stone-700 shadow-lg"
        >
          <div className="mb-3">
            <label htmlFor="user_name" className="block text-stone-300 mb-1 text-sm">Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-3 py-2 bg-stone-800/50 border border-stone-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white text-sm"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="user_email" className="block text-stone-300 mb-1 text-sm">Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="w-full px-3 py-2 bg-stone-800/50 border border-stone-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white text-sm"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-stone-300 mb-1 text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell me about your project or just say hello!"
              required
              className="w-full px-3 py-2 bg-stone-800/50 border border-stone-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white text-sm"
            ></textarea>
          </div>
          
          {/* Motion button with hover scaling */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>

          {/* ✅ Success/Error Message */}
          {status && (
            <p
              className={`mt-3 text-center text-sm ${
                status.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {status.text}
            </p>
          )}
        </motion.form>
        
        <div className="mt-6 text-center text-stone-400 text-xs">
          <p>Or reach out directly at:</p>
          <a href="mailto:tejkumarjajula@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            tejkumarjajula@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;