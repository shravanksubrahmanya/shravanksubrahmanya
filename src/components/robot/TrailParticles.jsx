/* ── Trail particles left behind during robot flight ── */
export const TrailParticles = ({ trail, glowRgb }) => (
  <>
    {trail.map((dot) => (
      <div
        key={dot.id}
        className="fixed rounded-full pointer-events-none z-40 animate-particle-fade"
        style={{
          left: `${dot.left}vw`,
          top: `${dot.top}vh`,
          width: dot.size,
          height: dot.size,
          background: `rgba(${glowRgb},0.7)`,
          boxShadow: `0 0 ${dot.size + 4}px rgba(${glowRgb},0.5)`,
          animationDelay: `${dot.delay}ms`,
          opacity: 0,
          animationFillMode: "backwards",
        }}
      />
    ))}
  </>
);
