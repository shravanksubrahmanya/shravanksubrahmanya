/* ── Robot face (CSS-drawn eyes + mouth) ── */
export const RobotFace = ({ excited }) => (
  <div className="flex flex-col items-center justify-center w-full h-full">
    <div className="flex gap-1.5 mb-0.5">
      {[0, 1].map((i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-sm transition-colors duration-200"
          style={{
            background: excited ? "#fde047" : "#a5f3fc",
            boxShadow: excited
              ? "0 0 6px rgba(253,224,71,0.9)"
              : "0 0 5px rgba(165,243,252,0.8)",
          }}
        />
      ))}
    </div>
    <div
      className="rounded-full transition-all duration-200"
      style={{
        width: excited ? 18 : 14,
        height: excited ? 6 : 4,
        background: excited ? "#fde047" : "#bae6fd",
      }}
    />
  </div>
);
