/* ── Section catalogue — each section gets a waypoint coordinate ── */
export const SECTIONS = [
  {
    id: "home",
    label: "Home",
    message: "Hey there! I'll guide you through Shravan's world!",
    gradient: "from-blue-500 to-cyan-400",
    glow: "59,130,246",
    waypoint: { left: 82, top: 18 },
  },
  {
    id: "about",
    label: "About",
    message: "GenAI, Cloud & Full-Stack — quite the toolkit!",
    gradient: "from-violet-500 to-blue-500",
    glow: "139,92,246",
    waypoint: { left: 8, top: 32 },
  },
  {
    id: "education",
    label: "Education",
    message: "9.2 GPA in MCA — strong academic foundation!",
    gradient: "from-emerald-500 to-cyan-500",
    glow: "16,185,129",
    waypoint: { left: 86, top: 28 },
  },
  {
    id: "experience",
    label: "Experience",
    message: "3 companies, real-world impact & big numbers!",
    gradient: "from-orange-500 to-yellow-400",
    glow: "249,115,22",
    waypoint: { left: 6, top: 46 },
  },
  {
    id: "projects",
    label: "Projects",
    message: "Expand a card & hit View Details to explore!",
    gradient: "from-pink-500 to-purple-500",
    glow: "236,72,153",
    waypoint: { left: 88, top: 30 },
  },
  {
    id: "blogs",
    label: "Blogs",
    message: "Sharing knowledge with the tech community!",
    gradient: "from-teal-500 to-green-400",
    glow: "20,184,166",
    waypoint: { left: 7, top: 52 },
  },
  {
    id: "github",
    label: "GitHub",
    message: "Open-source contributions & code live here!",
    gradient: "from-gray-500 to-slate-400",
    glow: "100,116,139",
    waypoint: { left: 88, top: 48 },
  },
  {
    id: "contact",
    label: "Contact",
    message: "Want to build something great? Let's talk!",
    gradient: "from-blue-500 to-purple-500",
    glow: "59,130,246",
    waypoint: { left: 50, top: 72 },
  },
];

/* Mobile waypoints: bottom strip, alternating sides */
export const MOBILE_WAYPOINTS = {
  home: { left: 85, top: 88 },
  about: { left: 15, top: 88 },
  education: { left: 85, top: 88 },
  experience: { left: 15, top: 88 },
  projects: { left: 85, top: 88 },
  blogs: { left: 15, top: 88 },
  github: { left: 85, top: 88 },
  contact: { left: 50, top: 88 },
};
