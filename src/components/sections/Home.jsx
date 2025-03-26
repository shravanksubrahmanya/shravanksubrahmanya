import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  const titles = [
    "Shravan K Subrahmanya",
    "a Software Engineer",
    "an AI Engineer",
    "an Enthusiast",
  ];

  // Which title we’re on
  const [titleIndex, setTitleIndex] = useState(0);
  // How many characters of the current title we’re displaying
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    const fullText = titles[titleIndex];

    // If we haven't finished typing the current title
    if (subIndex < fullText.length) {
      // Type the next character after 100ms
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      // We've typed all characters in this title
      // Pause for 1200ms, then move to the next title
      const timeout = setTimeout(() => {
        // Move to next title index
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        // Reset subIndex so we type from the start
        setSubIndex(0);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [subIndex, titleIndex, titles]);

  // The text we display is the substring of the current title
  const displayText = titles[titleIndex].substring(0, subIndex);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <RevealOnScroll>
        <div className="text-center z-10">
          {/* "Hi, I'm" stays constant; typed text changes */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {displayText}
            </span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-lg mx-auto">
            Innovative Software Engineer and Microsoft Certified Azure Developer
            Associate with expertise in Full-Stack Web Development, specializing
            in React.js, Node.js, Python, and Azure AI. Skilled in crafting
            user-friendly interfaces and designing scalable architectures.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-2 sm:py-3 px-4 sm:px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
