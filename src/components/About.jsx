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
              Hey! I'm <strong>Moinak Ghosh</strong>, A full stack developer
              (MERN) passionate about building responsive, user-friendly, and
              visually appealing web applications.
            </p>

            <p>
              I enjoy combining clean code with thoughtful design to build
              intuitive and user-friendly web applications. I primarily work
              within the <strong>JavaScript ecosystem</strong>, especially React
              and Node.js, to develop modern full-stack applications.
            </p>

            <p>
              When I'm not coding, I enjoy exploring new technologies, enhancing
              my skills, and building personal projects to create better and
              more efficient web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
