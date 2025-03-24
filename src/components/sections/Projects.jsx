import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const dbot_techs = [
    "React",
    "Python",
    "Azure Functions",
    "Azure AI Services",
    "Azure Cosmos DB",
    "Azure Entra ID",
    "Azure Storage Account",
    "Azure Application Insights",
  ];
  const skyai_techs = ["JavaScript", "DevExtreme", "HTML", "CSS"];
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Donyati Bot - Internal Web Application
              </h3>
              <p className="text-gray-400 mb-4">
                Developed an internal web application that utilizes AI
                capabilities to assist employees by generating textual data and
                performing tasks.
              </p>
              <div>
                {dbot_techs.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href=""
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ❯❯❯❯
                </a>
              </div>
            </div>
            {/* project 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                SkyAI - Skyward Specialty Insurance
              </h3>
              <p className="text-gray-400 mb-4">
                Created web pages for Skyward Specialty, showcasing backend API
                data through visual representations.
              </p>
              <div>
                {skyai_techs.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href=""
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ❯❯❯❯
                </a>
              </div>
            </div>
            {/* project 3 */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
