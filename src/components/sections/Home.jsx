import { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaBolt } from "react-icons/fa";
import { focusRobotOnCard } from "../../utils/robotEvents";

/* ── Animated counter that triggers on first scroll-into-view ── */
const AnimatedCounter = ({ target, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export const Home = () => {
  const titles = [
    "Shravan K Subrahmanya",
    "an AI Engineer",
    "a GenAI Architect",
    "a Full-Stack Engineer",
    "a Cloud Builder",
    "a Curious Mind",
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    const fullText = titles[titleIndex];
    if (subIndex < fullText.length) {
      const t = setTimeout(() => setSubIndex((p) => p + 1), 80);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setTitleIndex((p) => (p + 1) % titles.length);
        setSubIndex(0);
      }, 1400);
      return () => clearTimeout(t);
    }
  }, [subIndex, titleIndex]);

  const displayText = titles[titleIndex].substring(0, subIndex);

  const stats = [
    { value: 4, suffix: "+", label: "Years Experience" },
    { value: 1000, suffix: "+", label: "Users Served" },
    { value: 15, suffix: "+", label: "AI Projects" },
    { value: 3, suffix: "", label: "Companies" },
  ];

  const skillTags = [
    { label: "Full-Stack Dev", color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-300" },
    { label: "MERN Stack",     color: "from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-300" },
    { label: "GenAI / RAG",    color: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300" },
    { label: "LangGraph",      color: "from-orange-500/20 to-amber-500/20 border-orange-500/30 text-orange-300" },
    { label: "Azure Databricks", color: "from-blue-500/20 to-indigo-500/20 border-blue-400/30 text-blue-300" },
    { label: "CI/CD & MLOps",  color: "from-cyan-500/20 to-teal-500/20 border-cyan-500/30 text-cyan-300" },
    { label: "React · Python", color: "from-sky-500/20 to-blue-500/20 border-sky-500/30 text-sky-300" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden pt-20 md:pt-0"
    >
      {/* ── Aurora Background Orbs ─────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Blue orb — top left */}
        <div
          className="absolute rounded-full animate-blob"
          style={{
            width: "500px",
            height: "500px",
            top: "-120px",
            left: "-80px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Purple orb — bottom right */}
        <div
          className="absolute rounded-full animate-blob animation-delay-2000"
          style={{
            width: "420px",
            height: "420px",
            bottom: "-80px",
            right: "-60px",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Cyan orb — center right */}
        <div
          className="absolute rounded-full animate-blob animation-delay-4000"
          style={{
            width: "300px",
            height: "300px",
            top: "40%",
            right: "8%",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        {/* Subtle dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(59,130,246,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ── Main Content ──────────────────────────────── */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">

        {/* Credential badge */}
        <div
          onClick={(e) =>
            focusRobotOnCard(e.currentTarget, "Microsoft Certified Azure Developer — AZ-204!", "home")
          }
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium mb-6 backdrop-blur-sm animate-glow-pulse cursor-pointer"
        >
          <FaBolt className="text-yellow-400 text-[10px]" />
          Microsoft Certified Azure Developer &nbsp;·&nbsp; AZ-204
        </div>

        {/* Heading — min-h prevents layout shift when typewriter text wraps to 2 lines on mobile */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight tracking-tight min-h-[5.5rem] sm:min-h-[7rem] md:min-h-0">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {displayText}
          </span>
          <span className="animate-blink text-blue-400">|</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-3 max-w-2xl mx-auto leading-relaxed">
          Results-driven{" "}
          <span className="text-white font-semibold">AI Engineer</span> crafting
          cloud-native, serverless & generative-AI solutions — from{" "}
          <span className="text-cyan-400 font-medium">LangGraph agents</span> on
          Azure Databricks to production{" "}
          <span className="text-blue-400 font-medium">RAG pipelines</span>{" "}
          serving enterprise teams.
        </p>

        <p className="text-gray-500 text-sm mb-10">
          Currently @ Ecolab Digital Centre &nbsp;·&nbsp; Previously @ Donyati &amp; Infosys
        </p>

        {/* ── Animated Stats Row ─────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <div
              key={i}
              onClick={(e) =>
                focusRobotOnCard(e.currentTarget, `${s.value}${s.suffix} ${s.label}`, "home")
              }
              className="glass rounded-xl border border-white/10 hover:border-blue-500/30 p-4 transition-all duration-300 hover:-translate-y-1 neon-hover cursor-pointer"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-gray-400 text-xs mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Skill Tags ─────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillTags.map((tag) => (
            <span
              key={tag.label}
              onClick={(e) =>
                focusRobotOnCard(e.currentTarget, `Skilled in ${tag.label}`, "home")
              }
              className={`text-xs px-3 py-1.5 rounded-full border bg-gradient-to-r font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(59,130,246,0.2)] cursor-pointer ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* ── CTA Buttons ────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 py-3 px-7 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:from-blue-500 hover:to-cyan-500"
            style={{ color: "#ffffff" }}
          >
            View Projects
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-blue-500/50 text-blue-300 py-3 px-7 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:bg-blue-500/10 hover:border-blue-400 backdrop-blur-sm"
          >
            Contact Me
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 border border-white/10 text-gray-400 py-3 px-7 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:text-gray-200 hover:bg-white/5 backdrop-blur-sm"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
};
