import { useState } from "react";
import { NAV_LINKS } from "../data/index.js";
import { useScrollSpy, useScrolled } from "../hooks/index.js";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const activeSection = useScrollSpy(NAV_LINKS.map((l) => l.toLowerCase()));
  const { theme, toggleTheme } = useTheme();

  const ThemeIcon = () =>
    theme === "dark" ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    );

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            &lt;<span>Zeeshan</span> /&gt;
          </a>

          {/* Desktop nav links */}
          <ul className="nav-links-list">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className={activeSection === l.toLowerCase() ? "active" : ""}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right actions (hidden on mobile) */}
          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <ThemeIcon />
            </button>
            <a
              href="/Zeeshan_Saleem_Resume.pdf"
              download="Zeeshan_Saleem_Resume.pdf"
              className="nav-resume"
            >
              ↓ Resume
            </a>
            <a href="mailto:codewithzezo@gmail.com" className="nav-cta">
              Hire Me →
            </a>
          </div>

          {/* Mobile: theme toggle LEFT of hamburger */}
          <div className="mobile-nav-end">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <ThemeIcon />
            </button>
            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-drawer${menuOpen ? " open" : ""}`}>
        <div className="mobile-drawer-inner">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="/Zeeshan_Saleem_Resume.pdf"
            download="Zeeshan_Saleem_Resume.pdf"
            className="mobile-resume-link"
            onClick={() => setMenuOpen(false)}
          >
            ↓ Download Resume
          </a>
        </div>
      </div>
    </>
  );
}
