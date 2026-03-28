import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      style={{ background: "var(--nav-bg)" }}
      className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center backdrop-blur-lg
                    transition-all duration-300 ease-in-out
                    ${
                      menuOpen
                        ? "h-screen opacity-100 pointer-events-auto"
                        : "h-0 opacity-0 pointer-events-none"
                    }
                    `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-3xl focus:outline-none cursor-pointer" style={{ color: "var(--text-primary)" }}
        aria-label="Close Menu"
      >
        &times;
      </button>
      <nav className="flex flex-col items-center space-y-4">
        {["Home", "About", "Projects", "Blogs", "GitHub", "Contact"].map(
          (section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ color: "var(--text-primary)" }}
              className={`text-2xl font-semibold transform transition-transform duration-300
              ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }
            `}
            >
              {section}
            </a>
          )
        )}
      </nav>
    </div>
  );
};
