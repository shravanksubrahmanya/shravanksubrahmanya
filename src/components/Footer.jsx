export const Footer = () => {
  return (
    <footer className="border-t py-4 px-4 sm:px-6 lg:px-8 transition-colors duration-300" style={{ background: "var(--nav-bg)", borderColor: "var(--border-color)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          © {new Date().getFullYear()} Shravan K Subrahmanya. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
