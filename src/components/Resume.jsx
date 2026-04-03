import "../styles/Resume.css";

function Resume() {
  return (
    <section id="resume">
      <div className="section-wrapper">
        <p className="section-label">My Resume</p>
        <h2 className="section-title reveal">Download Resume</h2>

        <div className="resume-card reveal reveal-delay-1">
          <span className="resume-icon">📄</span>
          <h3 class="resume-name">Moinak Ghosh</h3>
          <p>
            A frontend developer specializing in React, focused on building
            responsive, scalable, and user-centric web applications. Currently
            expanding backend knowledge (Node.js, Express) while actively
            developing real-world projects and strengthening problem-solving
            skills.
          </p>
          <div className="resume-btns">
            <a
              href="/resume.pdf"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ View Online
            </a>
          </div>

          <div className="resume-highlights">
            <div className="resume-hl">
              <span className="hl-dot"></span>
              Open to Opportunities
            </div>

            <div className="resume-hl">
              <span className="hl-dot"></span>
              Frontend-focused Full Stack Development (MERN – Learning Backend)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
