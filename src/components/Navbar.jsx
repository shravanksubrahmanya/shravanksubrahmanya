import { useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-lg border-b shadow-lg transition-colors duration-300" style={{ background: "var(--nav-bg)", borderColor: "var(--border-color)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold" style={{ color: "var(--text-primary)" }}>
            Shravan K Subrahmanya
          </a>

          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border transition-all duration-300" style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
              aria-label="Toggle theme"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Mobile hamburger */}
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Projects", "Blogs", "GitHub", "Contact"].map(
                (section) => (
                  <a
                    key={section}
                    href={`#${section.toLowerCase()}`}
                    className="transition-colors hover:text-blue-500" style={{ color: "var(--text-secondary)" }}
                  >
                    {section}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
