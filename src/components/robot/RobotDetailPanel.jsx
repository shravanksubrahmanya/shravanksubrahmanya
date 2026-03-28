import { useEffect, useCallback } from "react";

const INTROS = [
  "Let me walk you through this one!",
  "Here's the scoop on this project!",
  "This one's pretty cool — check it out!",
  "Allow me to present…",
  "Ooh, great pick! Here's the breakdown:",
];

const pickIntro = () => INTROS[Math.floor(Math.random() * INTROS.length)];

export const RobotDetailPanel = ({
  project,
  onClose,
  robotPos,
  isMobile,
  gradient,
  glowRgb,
}) => {
  /* ── Lock body scroll ─────────────────────────────────── */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  /* ── Close on Escape ──────────────────────────────────── */
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  if (!project) return null;

  /* ── Positioning logic ────────────────────────────────── */
  const panelOnRight = robotPos.left < 50;

  const desktopStyle = {
    position: "fixed",
    top: "50%",
    transform: "translateY(-50%)",
    ...(panelOnRight ? { left: "18vw" } : { right: "18vw" }),
    maxWidth: 520,
    maxHeight: "80vh",
    width: "90vw",
    animation: "panel-fade-in 0.35s ease-out both",
  };

  const mobileStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: "85vh",
    borderRadius: "20px 20px 0 0",
    animation: "panel-slide-up 0.35s ease-out both",
  };

  const panelStyle = isMobile ? mobileStyle : desktopStyle;

  /* ── Arrow connector (desktop only) ───────────────────── */
  const arrowSide = panelOnRight ? "left" : "right";
  const arrowStyle = {
    position: "absolute",
    top: "20%",
    [arrowSide]: -10,
    width: 0,
    height: 0,
    borderTop: "10px solid transparent",
    borderBottom: "10px solid transparent",
    ...(panelOnRight
      ? { borderRight: "10px solid rgba(15,15,25,0.88)" }
      : { borderLeft: "10px solid rgba(15,15,25,0.88)" }),
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60]"
        style={{ background: "rgba(0,0,0,0.45)" }}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="z-[70] overflow-y-auto overscroll-contain"
        style={{
          ...panelStyle,
          background: "rgba(15,15,25,0.88)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: `0 0 40px rgba(${glowRgb},0.18), 0 20px 60px rgba(0,0,0,0.5)`,
        }}
      >
        {/* Desktop arrow */}
        {!isMobile && <div style={arrowStyle} />}

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full
                     text-white/60 hover:text-white hover:bg-white/10 transition-colors text-lg z-10"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {/* Robot intro header */}
          <p className="text-sm text-white/50 mb-3 italic">
            <span className="mr-1.5">🤖</span>
            {pickIntro()}
          </p>

          {/* Title */}
          <h3
            className={`text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
          >
            {project.title}
          </h3>

          {/* Meta line */}
          {(project.type || project.company) && (
            <p className="text-xs text-white/40 mb-4">
              {project.type}
              {project.company && ` — ${project.company}`}
              {project.client && ` (Client: ${project.client})`}
              {project.institution && ` — ${project.institution}`}
              {project.guide && ` (Guide: ${project.guide})`}
            </p>
          )}

          {/* Brief description */}
          <p className="text-sm text-white/75 leading-relaxed mb-4">
            {project.briefDescription}
          </p>

          {/* Detailed HTML description */}
          {project.detailedDescription && (
            <div
              className="text-sm text-white/65 leading-relaxed mb-4
                         [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mt-1 [&_ul]:mb-2
                         [&_li]:mb-0.5
                         [&_p]:mb-2 [&_strong]:text-white/80"
              dangerouslySetInnerHTML={{ __html: project.detailedDescription }}
            />
          )}

          {/* Tech chips */}
          {project.technologies?.length > 0 && (
            <div className="mb-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `rgba(${glowRgb},0.12)`,
                      color: `rgba(${glowRgb},1)`,
                      border: `1px solid rgba(${glowRgb},0.25)`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Learnings */}
          {project.learnings && (
            <div className="mb-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1.5">
                Key Learnings
              </h4>
              <p className="text-sm text-white/60 leading-relaxed">
                {project.learnings}
              </p>
            </div>
          )}

          {/* GitHub / external link */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium mt-1 transition-colors"
              style={{ color: `rgba(${glowRgb},0.9)` }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = `rgba(${glowRgb},1)`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = `rgba(${glowRgb},0.9)`)
              }
            >
              View Project &rarr;
            </a>
          )}
        </div>
      </div>
    </>
  );
};
