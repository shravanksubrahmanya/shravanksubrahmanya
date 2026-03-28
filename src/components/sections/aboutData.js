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
  SiAmazon,
  SiDatabricks,
  SiGithubactions,
  SiMlflow,
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
  FaNetworkWired,
  FaKey,
  FaBolt,
  FaProjectDiagram,
  FaChartLine,
} from "react-icons/fa";

export const frontendTech = [
  { name: "React.js", icon: SiReact },
  { name: "Javascript", icon: SiJavascript },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "jQuery", icon: SiJquery },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
];

export const backendTech = [
  { name: "Python", icon: SiPython },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Django", icon: SiDjango },
  { name: "Flask", icon: SiFlask },
];

export const cloudTech = [
  { name: "Microsoft Azure", icon: FaCloud },
  { name: "AWS", icon: SiAmazon },
  { name: "Azure Databricks", icon: SiDatabricks },
  { name: "CI/CD Pipelines", icon: SiGithubactions },
  { name: "Azure Functions", icon: FaBolt },
  { name: "Logic Apps", icon: FaProjectDiagram },
  { name: "API Management", icon: FaNetworkWired },
  { name: "Key Vault", icon: FaKey },
];

export const databaseTech = [
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Azure Cosmos DB", icon: FaDatabase },
  { name: "Azure Blob Storage", icon: FaCloud },
  { name: "Azure Table Storage", icon: FaTable },
];

export const aiTech = [
  { name: "Azure OpenAI", icon: FaRobot },
  { name: "LangChain", icon: FaLink },
  { name: "LangGraph", icon: FaProjectDiagram },
  { name: "Semantic Kernel", icon: FaCog },
  { name: "Azure AI Services", icon: FaBrain },
  { name: "Azure AI Search", icon: FaSearch },
  { name: "MLflow", icon: SiMlflow },
  { name: "RAG Systems", icon: FaChartLine },
];

export const coreCompetencies = [
  "AI Solution Architecture & Development",
  "Generative AI & RAG Systems",
  "Cloud-Native Application Development",
  "Scalable System Design & Optimization",
  "API Ecosystem & Microservices",
  "MLOps, CI/CD & DevOps Enablement",
  "Data-Driven Application Engineering",
  "Digital Transformation & Automation",
  "Cross-Functional Leadership",
];

export const softSkillsData = [
  { name: "Collaborator", iconName: "FaUsers" },
  { name: "Communicator", iconName: "FaComments" },
  { name: "Planner", iconName: "FaTasks" },
  { name: "Innovator", iconName: "FaLightbulb" },
  { name: "Intuitive", iconName: "FaBrain" },
];

export const certifications = [
  {
    title: "Microsoft Certified: Azure Developer Associate",
    code: "AZ-204",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    textColor: "text-blue-400",
  },
  {
    title: "Problem Solving (Intermediate)",
    code: "HackerRank",
    color: "from-green-500/20 to-emerald-500/20 border-green-500/30",
    textColor: "text-green-400",
  },
  {
    title: "Build NLP Solutions with Azure AI Language",
    code: "Microsoft Learn",
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
    textColor: "text-purple-400",
  },
  {
    title: "Intelligent Document Processing with Azure AI",
    code: "Microsoft Learn",
    color: "from-orange-500/20 to-amber-500/20 border-orange-500/30",
    textColor: "text-orange-400",
  },
];

export const techCategories = [
  { label: "Frontend", data: frontendTech },
  { label: "Backend", data: backendTech },
  { label: "Cloud & DevOps", data: cloudTech },
  { label: "Databases", data: databaseTech },
  { label: "AI / GenAI & MLOps", data: aiTech },
];
