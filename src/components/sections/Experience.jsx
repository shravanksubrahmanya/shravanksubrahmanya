import { RevealOnScroll } from "../RevealOnScroll";
import { FaBriefcase, FaStar } from "react-icons/fa";
import { focusRobotOnCard } from "../../utils/robotEvents";

export const Experience = () => {
  const experienceData = [
    {
      role: "AI Engineer",
      company: "Ecolab Digital Centre",
      location: "Bangalore",
      period: "September 2025 – Present",
      badge: "Current",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      description:
        "Engineering enterprise-grade AI solutions within the ONE EVA platform on Azure Databricks. Designing scalable agent-based architectures, LangGraph-powered AI workflows, and MLOps pipelines that serve 1000+ users across North America.",
      highlights: [
        { metric: "~79%", label: "token reduction via CSV schema" },
        { metric: "~50%", label: "CRM analytics effort reduction" },
        { metric: "1000+", label: "active users across North America" },
      ],
      technologies: [
        "Azure Databricks",
        "LangGraph",
        "GPT Models",
        "Azure Functions",
        "Azure Bot Service",
        "Logic Apps",
        "MLflow",
        "Azure DevOps",
        "CI/CD (DAB)",
        "Microsoft Dynamics 365",
      ],
    },
    {
      role: "Software Engineer",
      company: "Donyati India Private Ltd",
      location: "Bangalore",
      period: "September 2023 – August 2025",
      badge: null,
      description:
        "Led full-stack development of DoAssist — an internal AI platform — contributing ~80% of the platform build using React.js (Azure Static Web Apps) and Python (Azure Functions). Delivered a large-scale RAG engine, IEEE Chatbot, and multiple AI workflows driving client acquisition and business expansion.",
      highlights: [
        { metric: "30%", label: "reduction in development time" },
        { metric: "50%", label: "improvement in AI development speed" },
        { metric: "~89%", label: "answer accuracy on IEEE Chatbot" },
      ],
      technologies: [
        "React.js",
        "Python",
        "Azure Functions",
        "Semantic Kernel",
        "LangChain",
        "LangGraph",
        "FastAPI",
        "Azure AI Services",
        "Azure Cosmos DB",
        "AWS Amplify",
        "AWS Bedrock",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Centre for Smart Governance Karnataka",
      location: "Bangalore",
      period: "February 2023 – May 2023",
      badge: null,
      description:
        "Developed web applications for the Government of Karnataka. Built the New Gandhi Sakchi Kayaka (NGSK) application using ASP.NET and MS-SQL, gaining hands-on enterprise development experience.",
      highlights: [],
      technologies: ["ASP.NET", "MS-SQL", "AJAX", "JavaScript"],
    },
    {
      role: "Operations Executive",
      company: "Infosys Limited",
      location: "Mysore",
      period: "June 2019 – November 2020",
      badge: null,
      description:
        "Delivered an interactive job monitoring dashboard for SunTrust Bank using Power Pages, JavaScript, HTML, and CSS — enabling real-time tracking, filtering, and status visualization. Integrated banking APIs and automated email alert systems.",
      highlights: [
        { metric: "30%", label: "reduction in manual follow-ups" },
      ],
      technologies: [
        "JavaScript",
        "Power Pages",
        "Power Apps",
        "Power Platform",
        "HTML",
        "CSS",
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
            <div className="absolute left-4 sm:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/60 via-blue-500/30 to-transparent -z-10" />

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
                  <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute opacity-60"></div>
                  </div>
                </div>

                <div
                  onClick={(e) =>
                    focusRobotOnCard(
                      e.currentTarget,
                      `${exp.role} at ${exp.company} — ${exp.period}`,
                      "experience"
                    )
                  }
                  className={`ml-12 sm:ml-0 p-6 bg-white/5 rounded-xl border border-white/10
                  hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.07] transition-all duration-300
                  cursor-pointer flex-1 backdrop-blur-sm ${
                    index % 2 === 0 ? "sm:mr-16" : "sm:ml-16"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-1 flex-wrap">
                    <div className="flex items-center gap-3">
                      <FaBriefcase className="text-xl text-blue-500 flex-shrink-0" />
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                    </div>
                    {exp.badge && (
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full border font-medium ${exp.badgeColor}`}
                      >
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-base text-gray-200 font-medium mb-0.5 ml-8 sm:ml-0">
                    {exp.company}
                  </p>
                  <p className="text-xs text-gray-500 mb-1 ml-8 sm:ml-0">
                    {exp.location}
                  </p>
                  <p className="text-blue-400 text-sm font-medium mb-4 ml-8 sm:ml-0">
                    {exp.period}
                  </p>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Impact metrics */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div
                      className={`flex flex-wrap gap-3 mb-4 ${
                        index % 2 !== 0 ? "sm:justify-end" : ""
                      }`}
                    >
                      {exp.highlights.map((h, hi) => (
                        <div
                          key={hi}
                          className="flex items-center gap-1.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg px-3 py-1.5"
                        >
                          <FaStar className="text-yellow-400 text-xs" />
                          <span className="text-blue-300 font-bold text-sm">
                            {h.metric}
                          </span>
                          <span className="text-gray-400 text-xs">
                            {h.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech tags */}
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 !== 0 ? "sm:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-500/10 text-blue-400 px-2.5 py-0.5 rounded-full text-xs border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
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
