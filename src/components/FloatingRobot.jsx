import { useState, useEffect, useCallback, useRef } from "react";
import { SECTIONS, MOBILE_WAYPOINTS } from "./robot/robotConfig";
import { RobotFace } from "./robot/RobotFace";
import { SpeechBubble } from "./robot/SpeechBubble";
import { TrailParticles } from "./robot/TrailParticles";

/* ── Main component ────────────────────────────────────────────── */
export const FloatingRobot = () => {
  /* --- Position & motion state -------------------------------- */
  const [pos, setPos] = useState({ left: 82, top: 18 });
  const posRef = useRef({ left: 82, top: 18 });
  const prevPosRef = useRef({ left: 82, top: 18 });

  const [activeId, setActiveId] = useState("home");
  const [robotState, setRobotState] = useState("idle"); // idle | excited
  const [motionPhase, setMotionPhase] = useState("idle"); // idle | launching | flying | landing
  const [direction, setDirection] = useState("none"); // left | right | none
  const [trail, setTrail] = useState([]);
  const [sparkle, setSparkle] = useState(false);

  const [bubbleVisible, setBubbleVisible] = useState(true);
  const [overrideMsg, setOverrideMsg] = useState(null);
  const [hovered, setHovered] = useState(false);

  /* --- Refs --------------------------------------------------- */
  const hideTimerRef = useRef(null);
  const motionTimersRef = useRef([]);
  const prevSectionRef = useRef("home");
  const hoveredRef = useRef(false);
  const isMobileRef = useRef(
    typeof window !== "undefined" && window.innerWidth < 768
  );

  // Sync hoveredRef
  useEffect(() => {
    hoveredRef.current = hovered;
  }, [hovered]);

  // Track mobile resize
  useEffect(() => {
    const onResize = () => {
      isMobileRef.current = window.innerWidth < 768;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* --- Show bubble with auto-hide ----------------------------- */
  const showBubble = useCallback((delay = 4500) => {
    setBubbleVisible(true);
    clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      if (!hoveredRef.current) setBubbleVisible(false);
    }, delay);
  }, []);

  /* --- Fly to position ---------------------------------------- */
  const flyTo = useCallback(
    (newPos) => {
      const from = posRef.current;

      // Skip if already there
      if (
        Math.abs(from.left - newPos.left) < 1 &&
        Math.abs(from.top - newPos.top) < 1
      )
        return;

      prevPosRef.current = from;
      posRef.current = newPos;

      // Direction for tilt
      const dx = newPos.left - from.left;
      setDirection(dx > 0 ? "right" : dx < 0 ? "left" : "none");

      // Trail dots along the flight path
      const dots = [];
      const count = 8;
      for (let i = 1; i <= count; i++) {
        const t = i / (count + 1);
        dots.push({
          id: Date.now() + i,
          left:
            from.left +
            (newPos.left - from.left) * t +
            (Math.random() - 0.5) * 3,
          top:
            from.top +
            (newPos.top - from.top) * t +
            (Math.random() - 0.5) * 3,
          size: 4 + Math.random() * 4,
          delay: i * 55,
        });
      }
      setTrail((prev) => [...prev, ...dots]);
      setTimeout(
        () =>
          setTrail((prev) =>
            prev.filter((d) => !dots.some((nd) => nd.id === d.id))
          ),
        2000
      );

      // Motion-phase sequence: launch → fly → land → idle
      motionTimersRef.current.forEach(clearTimeout);
      setBubbleVisible(false);

      setMotionPhase("launching");

      const t1 = setTimeout(() => {
        setMotionPhase("flying");
        setPos(newPos);
      }, 130);

      const t2 = setTimeout(() => {
        setMotionPhase("landing");
        setDirection("none");
        setSparkle(true);
        setTimeout(() => setSparkle(false), 600);
      }, 1000);

      const t3 = setTimeout(() => {
        setMotionPhase("idle");
        showBubble(4500);
      }, 1200);

      motionTimersRef.current = [t1, t2, t3];
    },
    [showBubble]
  );

  /* --- Section detection -------------------------------------- */
  useEffect(() => {
    const observers = [];
    SECTIONS.forEach(({ id, waypoint }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && prevSectionRef.current !== id) {
            prevSectionRef.current = id;
            setActiveId(id);
            setOverrideMsg(null);
            setRobotState("idle");
            const wp = isMobileRef.current
              ? MOBILE_WAYPOINTS[id]
              : waypoint;
            flyTo(wp);
          }
        },
        { threshold: 0.35, rootMargin: "-80px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [flyTo]);

  /* --- Project modal events ----------------------------------- */
  useEffect(() => {
    const onOpen = (e) => {
      setRobotState("excited");
      setOverrideMsg(`Exploring: ${e.detail?.title ?? "project"}`);
      flyTo(
        isMobileRef.current
          ? { left: 50, top: 78 }
          : { left: 50, top: 12 }
      );
    };
    const onClose = () => {
      setRobotState("idle");
      setOverrideMsg(null);
      const s = SECTIONS.find((s) => s.id === "projects");
      if (s) {
        const wp = isMobileRef.current
          ? MOBILE_WAYPOINTS.projects
          : s.waypoint;
        flyTo(wp);
      }
    };
    window.addEventListener("robot:project-open", onOpen);
    window.addEventListener("robot:project-close", onClose);
    return () => {
      window.removeEventListener("robot:project-open", onOpen);
      window.removeEventListener("robot:project-close", onClose);
    };
  }, [flyTo]);

  /* --- Card-focus events (hover/click on any card) ------------ */
  const cardFocusTimerRef = useRef(null);
  useEffect(() => {
    const onCardFocus = (e) => {
      const { left, top, message, section } = e.detail ?? {};
      if (left == null || top == null) return;

      // Update section colour if a section id was provided
      if (section) {
        const match = SECTIONS.find((s) => s.id === section);
        if (match && activeId !== section) {
          setActiveId(match.id);
        }
      }

      setRobotState("excited");
      setOverrideMsg(message || "Check this out!");
      flyTo({ left, top });

      // Return to idle after a delay
      clearTimeout(cardFocusTimerRef.current);
      cardFocusTimerRef.current = setTimeout(() => {
        setRobotState("idle");
        setOverrideMsg(null);
      }, 4000);
    };
    window.addEventListener("robot:card-focus", onCardFocus);
    return () => {
      window.removeEventListener("robot:card-focus", onCardFocus);
      clearTimeout(cardFocusTimerRef.current);
    };
  }, [flyTo, activeId]);

  /* --- Hover bubble ------------------------------------------- */
  useEffect(() => {
    if (hovered) {
      clearTimeout(hideTimerRef.current);
      setBubbleVisible(true);
    }
  }, [hovered]);

  /* --- Cleanup ------------------------------------------------ */
  useEffect(
    () => () => {
      clearTimeout(hideTimerRef.current);
      motionTimersRef.current.forEach(clearTimeout);
    },
    []
  );

  /* --- Derived values ----------------------------------------- */
  const section = SECTIONS.find((s) => s.id === activeId) ?? SECTIONS[0];
  const excited = robotState === "excited";
  const bubbleText = overrideMsg ?? section.message;
  const glowRgb = excited ? "251,191,36" : section.glow;
  const gradient = excited
    ? "from-yellow-400 to-orange-400"
    : section.gradient;

  const bubbleOnRight = pos.left < 50;
  const tiltDeg =
    direction === "right" ? 18 : direction === "left" ? -18 : 0;

  const bodyAnim =
    motionPhase === "launching"
      ? "animate-squash-launch"
      : motionPhase === "landing"
        ? "animate-squash-land"
        : excited
          ? "animate-robot-excited"
          : "animate-robot-bob";

  /* --- Render ------------------------------------------------- */
  return (
    <>
      <TrailParticles trail={trail} glowRgb={glowRgb} />

      {/* ── Robot container (flies across screen) ─────── */}
      <div
        className="fixed z-50 pointer-events-none"
        style={{
          left: `${pos.left}vw`,
          top: `${pos.top}vh`,
          transform: "translate(-50%,-50%)",
          transition:
            motionPhase === "flying" || motionPhase === "landing"
              ? "left 0.9s cubic-bezier(0.34,1.56,0.64,1), top 0.9s cubic-bezier(0.34,1.56,0.64,1)"
              : "none",
        }}
      >
        <SpeechBubble
          visible={bubbleVisible}
          bubbleOnRight={bubbleOnRight}
          gradient={gradient}
          label={section.label}
          text={bubbleText}
        />

        {/* ── Robot body ──────────────────────────────── */}
        <div
          className={`relative w-[52px] h-[52px] rounded-full cursor-pointer select-none
            bg-gradient-to-br ${gradient} pointer-events-auto`}
          style={{
            boxShadow: `0 0 20px rgba(${glowRgb},0.55), 0 0 40px rgba(${glowRgb},0.22), 0 6px 24px rgba(0,0,0,0.5)`,
            transform: `rotate(${tiltDeg}deg) ${hovered ? "scale(1.18)" : "scale(1)"}`,
            transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setBubbleVisible((v) => !v)}
          title="Toggle guide"
        >
          <div className={`w-full h-full ${bodyAnim}`}>
            <RobotFace excited={excited} />
          </div>

          {/* Antenna */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
            <div
              className={`w-2 h-2 rounded-full animate-antenna ${excited ? "bg-yellow-300" : "bg-cyan-300"}`}
              style={{
                boxShadow: excited
                  ? "0 0 8px 2px rgba(253,224,71,0.9)"
                  : "0 0 6px 2px rgba(103,232,249,0.85)",
              }}
            />
            <div
              className={`w-px h-2.5 ${excited ? "bg-yellow-400/70" : "bg-cyan-400/60"}`}
            />
          </div>

          {/* Hover ring */}
          {hovered && (
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                border: "2px solid rgba(255,255,255,0.35)",
                boxShadow: `inset 0 0 14px rgba(${glowRgb},0.4)`,
              }}
            />
          )}

          {/* Arrival sparkle ring */}
          {sparkle && (
            <div
              className="absolute inset-[-8px] rounded-full animate-sparkle-ring pointer-events-none"
              style={{
                border: `2px solid rgba(${glowRgb},0.7)`,
                boxShadow: `0 0 12px rgba(${glowRgb},0.3)`,
              }}
            />
          )}
        </div>

        {/* ── Section label on hover ──────────────────── */}
        <div
          className="mt-1 text-center text-[9px] font-semibold uppercase tracking-widest"
          style={{
            color: "var(--text-muted)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.2s ease",
          }}
        >
          {section.label}
        </div>
      </div>
    </>
  );
};
