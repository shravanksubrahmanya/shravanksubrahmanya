import { useEffect, useState } from "react";

/* ── Inline mini robot for the loader (no dependency on FloatingRobot) ── */
const LoaderRobot = ({ message }) => (
  <div className="flex items-center gap-3 mb-8 animate-fade-up">
    {/* Robot body */}
    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 animate-robot-bob"
      style={{ boxShadow: "0 0 20px rgba(59,130,246,0.5), 0 0 40px rgba(59,130,246,0.2)" }}
    >
      {/* Eyes */}
      <div className="flex gap-1.5 mb-0.5">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-sm"
            style={{
              background: "#a5f3fc",
              boxShadow: "0 0 5px rgba(165,243,252,0.8)",
            }}
          />
        ))}
      </div>
      {/* Antenna */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div
          className="w-2 h-2 rounded-full bg-cyan-300 animate-antenna"
          style={{ boxShadow: "0 0 6px 2px rgba(103,232,249,0.85)" }}
        />
        <div className="w-px h-2 bg-cyan-400/60" />
      </div>
    </div>
    {/* Speech */}
    <div className="glass border rounded-xl px-3 py-2 max-w-[220px]" style={{ borderColor: "var(--border-color)" }}>
      <p className="text-sm leading-snug" style={{ color: "var(--text-secondary)" }}>{message}</p>
    </div>
  </div>
);

/* ── Phase messages the robot cycles through ── */
const ROBOT_MESSAGES = [
  "Booting up systems...",
  "Loading Shravan's world...",
  "Almost there, hang tight!",
];

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [robotMsg, setRobotMsg] = useState(ROBOT_MESSAGES[0]);
  const [fadeOut, setFadeOut] = useState(false);
  const fulltext = "print('Thanks for visiting — let's explore!')";

  // Typing effect — faster character speed (50ms vs 100ms)
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fulltext.substring(0, index));
      index++;
      if (index > fulltext.length) {
        clearInterval(interval);
        // Short pause then fade out
        setTimeout(() => setFadeOut(true), 400);
        setTimeout(() => onComplete(), 900);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  // Cycle robot messages
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i = (i + 1) % ROBOT_MESSAGES.length;
      setRobotMsg(ROBOT_MESSAGES[i]);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center px-4 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "var(--loading-bg, linear-gradient(135deg, #0a0a0a 0%, #0f172a 50%, #0a0a0a 100%))",
      }}
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute rounded-full animate-blob"
          style={{
            width: 400, height: 400,
            top: "10%", left: "20%",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute rounded-full animate-blob animation-delay-2000"
          style={{
            width: 350, height: 350,
            bottom: "10%", right: "15%",
            background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Robot guide */}
        <LoaderRobot message={robotMsg} />

        {/* Typed text */}
        <div className="mb-6 text-xl sm:text-2xl md:text-3xl font-mono font-bold text-center">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {text}
          </span>
          <span className="animate-blink ml-1 text-cyan-400">|</span>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-xs sm:max-w-sm h-[3px] rounded-full relative overflow-hidden"
          style={{ background: "rgba(59,130,246,0.15)" }}
        >
          <div
            className="h-full rounded-full animate-loading-bar"
            style={{
              width: "40%",
              background: "linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6)",
              boxShadow: "0 0 15px rgba(59,130,246,0.6), 0 0 30px rgba(6,182,212,0.3)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
