import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Javascript",
    "HTML",
    "CSS",
    "JQuery",
    "Tailwind",
    "Bootstrap",
  ];

  const backendSkills = [
    "Python",
    "Nodejs",
    "Expressjs",
    "FastApi",
    "Django",
    "Flask",
    "MongoDb",
    "CosmosDb",
    "Azure",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="glass rounded-xl p-6 sm:p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-center">
              Innovative Software Engineer and Microsoft Certified Azure
              Developer Associate with expertise in Full-Stack Web Development,
              specializing in React.js, Node.js, Python, and Azure AI. Skilled
              in crafting user-friendly interfaces and designing scalable
              architectures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
