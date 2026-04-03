import "../styles/About.css";
import profileImg from "../assets/profile.jpg";

function About() {
  return (
    <section id="about">
      <div className="section-wrapper">
        <p className="section-label">About Me</p>
        <h2 className="section-title reveal">Who I Am ...</h2>

        <div className="about-grid">
          {/* Visual side */}
          <div className="about-visual reveal reveal-delay-1">
            <div className="about-img-frame">
              <img src={profileImg} alt="Moinak Ghosh" className="about-img" />

              <div className="frame-corner tl"></div>
              <div className="frame-corner tr"></div>
              <div className="frame-corner bl"></div>
              <div className="frame-corner br"></div>
            </div>

            <div className="about-badge">
              <span className="status-dot"></span>
              Open to Work
            </div>
          </div>

          {/* Text side */}
          <div className="about-text reveal reveal-delay-2">
            <p>
              Hey! I'm <strong>Moinak Ghosh</strong>, a Frontend Developer
              (React) focused on building responsive, scalable, and visually
              engaging web applications.
            </p>

            <p>
              I enjoy combining clean code with modern UI/UX principles to
              create intuitive digital experiences. I primarily work within the{" "}
              <strong>JavaScript ecosystem</strong>, especially React, while
              expanding my backend knowledge with Node.js and Express.
            </p>

            <p>
              I am passionate about continuous learning and building real-world
              projects that solve meaningful problems, while strengthening my
              skills in frontend development, APIs, and scalable systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
