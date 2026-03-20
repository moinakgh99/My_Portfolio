import "../styles/Skills.css";

function Skills() {
  return (
    <section id="skills">
      <div className="section-wrapper">
        <p className="section-label">What I Know</p>
        <h2 className="section-title reveal">Skills & Tech</h2>

        <p className="skills-intro reveal reveal-delay-1">
          My skill set is focused on frontend development, from designing clean
          and responsive interfaces to building user-friendly web applications,
          while also working with the MERN stack for full-stack development.
        </p>

        <div className="skills-grid">
          {/* Frontend */}
          <div className="skill-category reveal reveal-delay-2">
            <h3>Frontend</h3>

            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">React.js</span>
                <span className="skill-pct">92%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="92"></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">HTML / CSS</span>
                <span className="skill-pct">85%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="85"></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Tailwind CSS</span>
                <span className="skill-pct">78%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="78"></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">JavaScript</span>
                <span className="skill-pct">90%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="90"></div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-category reveal reveal-delay-3">
            <h3>PROGRAMMING</h3>

            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">DSA with C++</span>
                <span className="skill-pct">60%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="60"></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">JavaScript </span>
                <span className="skill-pct">80%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="80"></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">C </span>
                <span className="skill-pct">75%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" data-pct="75"></div>
              </div>
            </div>
          </div>
        </div>

        <p className="tech-pills-label reveal">Also comfortable with:</p>

        <div className="tech-pills reveal reveal-delay-1">
          <span className="tech-pill">React</span>
          <span className="tech-pill">MySQL</span>
          <span className="tech-pill">MongoDB</span>
          <span className="tech-pill">Postman</span>
          <span className="tech-pill">Vercel</span>
          <span className="tech-pill">Three.js</span>
          <span className="tech-pill">Express.js</span>
          <span className="tech-pill">Node.js.js</span>
          <span className="tech-pill">Framer Motion</span>
          <span className="tech-pill">Tailwind</span>
          <span className="tech-pill">Bootstrap</span>
          <span className="tech-pill">Git</span>
          <span className="tech-pill">Git-Hub</span>
          <span className="tech-pill">APIs</span>
          <span className="tech-pill">Visual Studio Code</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
