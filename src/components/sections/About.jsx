import { RevealOnScroll } from "../RevealOnScroll";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiTailwindcss,
  SiBootstrap,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import {
  FaDatabase,
  FaCloud,
  FaTable,
  FaBrain,
  FaSearch,
  FaLink,
  FaCog,
  FaRobot,
} from "react-icons/fa";

export const About = () => {
  // Frontend technologies
  const frontendTech = [
    { name: "React", icon: SiReact },
    { name: "Javascript", icon: SiJavascript },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "jQuery", icon: SiJquery },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
  ];

  // Backend technologies
  const backendTech = [
    { name: "Python", icon: SiPython },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Django", icon: SiDjango },
    { name: "Flask", icon: SiFlask },
  ];

  // Database technologies
  const databaseTech = [
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Azure Cosmos DB", icon: FaDatabase },
    { name: "Azure Blob Storage", icon: FaCloud },
    { name: "Azure Table Storage", icon: FaTable },
  ];

  // AI Development technologies
  const aiTech = [
    { name: "Azure AI Services", icon: FaBrain },
    { name: "Azure AI Search", icon: FaSearch },
    { name: "LangChain", icon: FaLink },
    { name: "Semantic-Kernel", icon: FaCog },
    { name: "OpenAI", icon: FaRobot },
  ];

  // Common icon classes for smooth transitions and responsive sizes
  const iconClasses =
    "transition duration-300 ease-in-out transform hover:scale-110 text-4xl md:text-5xl lg:text-6xl text-white";

  // Wrapper for each tech icon with its label
  const TechIcon = ({ tech }) => {
    const IconComponent = tech.icon;
    return (
      <div
        className="flex flex-col items-center cursor-pointer"
        title={tech.name}
      >
        <IconComponent className={iconClasses} />
        <span className="mt-2 text-sm text-white">{tech.name}</span>
      </div>
    );
  };

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

            {/* NEW paragraph before listing technologies */}
            <p className="text-gray-300 mb-10 text-center">
              Over the years, I have worked with a variety of technologies. Here
              are some of the technologies I have experience with:
            </p>

            {/* Frontend Section */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-center">Frontend</h3>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {frontendTech.map((tech, index) => (
                  <TechIcon key={index} tech={tech} />
                ))}
              </div>
            </div>

            {/* Backend Section */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-center">Backend</h3>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {backendTech.map((tech, index) => (
                  <TechIcon key={index} tech={tech} />
                ))}
              </div>
            </div>

            {/* Database Section */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-center">Database</h3>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {databaseTech.map((tech, index) => (
                  <TechIcon key={index} tech={tech} />
                ))}
              </div>
            </div>

            {/* AI Development Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                AI Development
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {aiTech.map((tech, index) => (
                  <TechIcon key={index} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
