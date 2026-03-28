/* ── Speech bubble that appears beside the robot ── */
export const SpeechBubble = ({
  visible,
  bubbleOnRight,
  gradient,
  label,
  text,
}) => (
  <div
    style={{
      position: "absolute",
      ...(bubbleOnRight
        ? { left: "calc(100% + 14px)" }
        : { right: "calc(100% + 14px)" }),
      top: "50%",
      opacity: visible ? 1 : 0,
      transform: visible
        ? "translateY(-50%) scale(1)"
        : `translateY(-50%) scale(0.92) translateX(${bubbleOnRight ? "-6px" : "6px"})`,
      transition: "opacity 0.35s ease, transform 0.35s ease",
      pointerEvents: "none",
      minWidth: 155,
      maxWidth: 195,
    }}
  >
    <div className="glass border border-white/20 rounded-2xl px-3.5 py-2.5 shadow-2xl relative">
      {/* Section chip */}
      <div className="flex items-center gap-1.5 mb-1">
        <div
          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} flex-shrink-0`}
        />
        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          {label}
        </span>
      </div>
      <p className="text-xs leading-relaxed" style={{ color: "var(--text-primary)" }}>{text}</p>
      {/* Arrow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          width: 0,
          height: 0,
          ...(bubbleOnRight
            ? {
                left: -7,
                borderTop: "6px solid transparent",
                borderBottom: "6px solid transparent",
                borderRight: "7px solid rgba(255,255,255,0.15)",
              }
            : {
                right: -7,
                borderTop: "6px solid transparent",
                borderBottom: "6px solid transparent",
                borderLeft: "7px solid rgba(255,255,255,0.15)",
              }),
        }}
      />
    </div>
  </div>
);
