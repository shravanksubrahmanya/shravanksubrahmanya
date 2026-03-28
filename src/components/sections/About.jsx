import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaUsers,
  FaLightbulb,
  FaComments,
  FaTasks,
  FaBrain,
  FaCertificate,
} from "react-icons/fa";
import { focusRobotOnCard } from "../../utils/robotEvents";
import {
  techCategories,
  coreCompetencies,
  certifications,
  softSkillsData,
} from "./aboutData";

/* ── Reusable sub-components ──────────────────────────── */

const SectionHeader = ({ title }) => (
  <h3 className="text-lg font-bold mb-5 text-center">
    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
      {title}
    </span>
  </h3>
);

const ICON_CLASSES =
  "transition duration-300 ease-in-out transform hover:scale-110 text-3xl md:text-4xl lg:text-5xl";

const TechIcon = ({ tech }) => {
  const IconComponent = tech.icon;
  return (
    <div
      className="flex flex-col items-center cursor-pointer group"
      title={tech.name}
      onClick={(e) =>
        focusRobotOnCard(e.currentTarget, `${tech.name} — part of the toolkit!`, "about")
      }
    >
      <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500/40 group-hover:bg-blue-500/10 transition-all duration-300">
        <IconComponent className={ICON_CLASSES} style={{ color: "var(--text-primary)" }} />
      </div>
      <span className="mt-2 text-xs text-gray-400 group-hover:text-blue-300 transition-colors duration-200 text-center">
        {tech.name}
      </span>
    </div>
  );
};

const TechCategory = ({ label, data }) => (
  <div className="mb-10 last:mb-0">
    <p className="text-xs uppercase tracking-widest text-gray-500 text-center mb-5 font-medium">
      {label}
    </p>
    <div className="flex flex-wrap justify-center items-start gap-5">
      {data.map((tech, i) => (
        <TechIcon key={i} tech={tech} />
      ))}
    </div>
  </div>
);

const SOFT_SKILL_ICONS = { FaUsers, FaComments, FaTasks, FaLightbulb, FaBrain };

const SoftSkillChip = ({ skill }) => {
  const IconComponent = SOFT_SKILL_ICONS[skill.iconName];
  return (
    <div
      onClick={(e) =>
        focusRobotOnCard(e.currentTarget, `Key trait: ${skill.name}`, "about")
      }
      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-400/50 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 cursor-pointer group"
    >
      {IconComponent && (
        <IconComponent className="text-blue-400 text-sm group-hover:text-cyan-400 transition-colors" />
      )}
      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </div>
  );
};

const CertCard = ({ cert }) => (
  <div
    onClick={(e) =>
      focusRobotOnCard(e.currentTarget, `Certified: ${cert.title}`, "about")
    }
    className={`flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br ${cert.color} border transition-all duration-300 hover:-translate-y-0.5 cursor-pointer`}
  >
    <FaCertificate className={`text-xl mt-0.5 flex-shrink-0 ${cert.textColor}`} />
    <div>
      <p className="text-white text-sm font-medium leading-snug">{cert.title}</p>
      <p className={`text-xs mt-1 ${cert.textColor}`}>{cert.code}</p>
    </div>
  </div>
);

/* ── Glass card wrapper ───────────────────────────────── */
const GlassCard = ({ children, className = "" }) => (
  <div
    className={`glass rounded-xl p-6 sm:p-8 border border-white/10 hover:border-blue-500/30 transition-all backdrop-blur-sm ${className}`}
  >
    {children}
  </div>
);

/* ── Main About component ─────────────────────────────── */
export const About = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center py-20 px-4"
  >
    <RevealOnScroll>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        {/* Profile Summary */}
        <GlassCard className="mb-8">
          <p className="text-gray-300 mb-4 text-center leading-relaxed">
            AI & Full-Stack Engineer with{" "}
            <span className="text-blue-400 font-semibold">
              4+ years of experience
            </span>{" "}
            building cloud-native, serverless, and AI-powered applications using
            React.js, Python, Microsoft Azure, and Databricks.
          </p>
          <p className="text-gray-400 text-center text-sm leading-relaxed">
            Strong expertise in{" "}
            <span className="text-cyan-400 font-medium">
              AI Solution Architecture
            </span>
            ,{" "}
            <span className="text-cyan-400 font-medium">
              Generative AI & RAG systems
            </span>
            , and{" "}
            <span className="text-cyan-400 font-medium">
              AI workflow orchestration
            </span>{" "}
            using LangChain, LangGraph, and Azure OpenAI. Hands-on experience in
            Databricks-based AI development including MLOps, MLflow, and AI
            platform optimization.
          </p>
        </GlassCard>

        {/* Core Competencies */}
        <GlassCard className="mb-8">
          <SectionHeader title="Core Competencies" />
          <div className="flex flex-wrap justify-center gap-3">
            {coreCompetencies.map((item, i) => (
              <span
                key={i}
                onClick={(e) =>
                  focusRobotOnCard(e.currentTarget, item, "about")
                }
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-sm text-gray-300 hover:border-blue-400/50 hover:text-blue-300 transition-all duration-200 cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </GlassCard>

        {/* Technical Skills */}
        <GlassCard className="mb-8">
          <SectionHeader title="Technical Skills" />
          <p className="text-gray-400 mb-8 text-center text-sm">
            Technologies and tools I have worked with:
          </p>
          {techCategories.map((cat, i) => (
            <TechCategory key={i} label={cat.label} data={cat.data} />
          ))}
        </GlassCard>

        {/* Certifications */}
        <GlassCard className="mb-8">
          <SectionHeader title="Certifications" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <CertCard key={i} cert={cert} />
            ))}
          </div>
        </GlassCard>

        {/* Soft Skills */}
        <GlassCard>
          <SectionHeader title="Soft Skills" />
          <div className="flex flex-wrap justify-center gap-4">
            {softSkillsData.map((skill, i) => (
              <SoftSkillChip key={i} skill={skill} />
            ))}
          </div>
        </GlassCard>
      </div>
    </RevealOnScroll>
  </section>
);
