import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar" id="navbar">
        {/* Logo */}
        <a href="#home" className="nav-logo">
          <span className="bracket">[</span>
          moinak<span className="dot">.</span>dev
          <span className="bracket">]</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          <li>
            <a href="#home">
              <span className="num">01.</span>Home
            </a>
          </li>
          <li>
            <a href="#about">
              <span className="num">02.</span>About
            </a>
          </li>
          <li>
            <a href="#skills">
              <span className="num">03.</span>Skills
            </a>
          </li>
          <li>
            <a href="#projects">
              <span className="num">04.</span>Projects
            </a>
          </li>
          <li>
            <a href="#experience">
              <span className="num">05.</span>Experience
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className="num">06.</span>Contact
            </a>
          </li>
        </ul>

        {/* Resume button */}
        <a href="#resume" className="nav-cta">
          Resume ↗
        </a>

        {/* Mobile hamburger */}
        <button
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>
          Experience
        </a>
        <a href="#resume" onClick={() => setMenuOpen(false)}>
          Resume
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>
    </>
  );
}

export default Navbar;
