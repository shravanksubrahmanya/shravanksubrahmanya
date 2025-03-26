import { RevealOnScroll } from "../RevealOnScroll";
import { FaBriefcase } from "react-icons/fa";

export const Experience = () => {
  const experienceData = [
    {
      role: "Software Engineer",
      company: "Donyati India Pvt Ltd",
      period: "September 2023 - Present",
      description: `At Donyati India Pvt Ltd, I specialize in developing solutions using React JS and Python, 
      integrating Azure AI Services and OpenAI for AI-driven applications. By leveraging Azure cloud services, 
      I enhance productivity while focusing on both front-end and back-end development. I create dynamic, 
      user-friendly interfaces and scalable architectures, collaborating with cross-functional teams to deliver 
      high-quality software solutions.`,
      technologies: [
        "React JS",
        "Python",
        "Azure AI",
        "OpenAI",
        "Cloud Services",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Centre for Smart Governance Karnataka",
      period: "February 2023 - May 2023",
      description: `As an intern at the Centre for Smart Governance Karnataka, I gained hands-on experience with 
      ASP.Net, MS-SQL, AJAX, and JavaScript. I developed web applications, honed my problem-solving skills, 
      and learned to collaborate effectively with a team of developers. My primary project was the development 
      of the "New Gandhi Sakchi Kayaka (NGSK)" application.`,
      technologies: ["ASP.NET", "MS-SQL", "AJAX", "JavaScript"],
    },
    {
      role: "Operations Executive",
      company: "Infosys Limited",
      period: "June 2019 - November 2020",
      description: `During my tenure at Infosys Limited, I worked on JavaScript development for Power Pages, 
      creating interactive and dynamic web pages to enhance user experience. I contributed to building scalable 
      and efficient web solutions, and my major project involved developing Power Platform solutions for SunTrust 
      Banks using Power Apps.`,
      technologies: [
        "JavaScript",
        "Power Pages",
        "Power Apps",
        "Power Platform",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Work Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 h-full w-0.5 bg-blue-500/30 -z-10" />

            {experienceData.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row gap-8 mb-16 relative ${
                  index % 2 === 0
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse sm:text-right"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute"></div>
                  </div>
                </div>

                <div
                  className={`ml-12 sm:ml-0 p-6 bg-white/5 rounded-xl border border-white/10 
                  hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 
                  flex-1 backdrop-blur-sm ${
                    index % 2 === 0 ? "sm:mr-16" : "sm:ml-16"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaBriefcase className="text-2xl text-blue-500" />
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  </div>

                  <p className="text-lg text-gray-300 mb-2">{exp.company}</p>
                  <p className="text-blue-400 font-medium mb-4">{exp.period}</p>
                  <p className="text-gray-400 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
