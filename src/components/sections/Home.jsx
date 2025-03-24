import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <RevealOnScroll>
        <div className="text-center z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm Shravan K Subrahmanya
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
