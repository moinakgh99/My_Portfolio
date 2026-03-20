import "../styles/Hero.css";
import { useEffect } from "react";
import { typeWriter } from "../utils/helpers";
import { initThreeBackground } from "../utils/threeBackground";

function Hero() {
  useEffect(() => {
    initThreeBackground("hero-canvas");
  }, []);
  useEffect(() => {
    const el = document.getElementById("typed-name");
    if (el) {
      typeWriter(el, [
        "Moinak Ghosh",
        "FullStack Developer",
        "Open Source Enthusiast",
      ]);
    }
  }, []);

  return (
    <section id="home">
      {/* Three.js animated background */}
      <canvas id="hero-canvas"></canvas>

      {/* CRT scanline overlay */}
      <div className="hero-scanline"></div>

      {/* Corner decorations */}
      <div className="hero-corner tl"></div>
      <div className="hero-corner tr"></div>
      <div className="hero-corner bl"></div>
      <div className="hero-corner br"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot"></span>
          Available for Hire
        </div>

        <h1 className="hero-name">
          <span className="first">Hi, I'm </span>
          <span className="typed-wrapper">
            <span id="typed-name"></span>
            <span className="cursor-blink"></span>
          </span>
        </h1>

        <p className="hero-subtitle">
          <span className="hl">★</span> FullStack Developer
          <span className="hl"> &amp; </span> Open-Source Enthusiast
        </p>

        <p className="hero-tagline">
          I build full-stack web applications using the MERN stack, transforming
          ideas into scalable, responsive, and user-friendly digital
          experiences.
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">
            View My Work ↓
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch →
          </a>
        </div>
      </div>

      <div className="scroll-hint">
        <span>SCROLL</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
