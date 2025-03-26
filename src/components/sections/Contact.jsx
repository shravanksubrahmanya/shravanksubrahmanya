import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaMedium, FaGithub, FaTwitter } from "react-icons/fa";
import { SiUdemy, SiOrcid } from "react-icons/si";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <RevealOnScroll>
        <div className="max-w-lg w-full">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          {/* Introductory Text */}
          <p className="text-gray-300 text-center mb-8">
            I’m always eager to explore new opportunities and take on exciting
            projects. If you have a project in mind, or just want to say hi,
            feel free to send me a message.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Name..."
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="youremail@domain.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Your Message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,256,0.4)]"
            >
              Send Message
            </button>
          </form>

          {/* Icons in a single responsive row */}
          <div className="mt-8 w-full flex flex-row justify-center items-center space-x-6 overflow-x-auto">
            <a
              href="https://www.linkedin.com/in/shravan-k-s-4a04ba155/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-blue-500 hover:text-blue-400 transition text-2xl md:text-4xl lg:text-5xl" />
            </a>
            <a
              href="https://medium.com/@shravanksubrahmanya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
            >
              <FaMedium className="text-white hover:text-gray-200 transition text-2xl md:text-4xl lg:text-5xl" />
            </a>
            <a
              href="https://github.com/shravanksubrahmanya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-white hover:text-gray-300 transition text-2xl md:text-4xl lg:text-5xl" />
            </a>
            <a
              href="https://x.com/S_K_Subrahmanya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-blue-400 hover:text-blue-300 transition text-2xl md:text-4xl lg:text-5xl" />
            </a>
            <a
              href="https://www.udemy.com/user/shravan-k-s-sks/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Udemy"
            >
              <SiUdemy className="text-red-600 hover:text-red-500 transition text-2xl md:text-4xl lg:text-5xl" />
            </a>
            <a
              href="https://orcid.org/0009-0006-3595-0382"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ORCID"
            >
              <SiOrcid className="text-green-500 hover:text-green-400 transition text-2xl md:text-4xl lg:text-5xl" />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
