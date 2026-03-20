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
            A passionate frontend-focused full stack developer (MERN) skilled in
            building responsive and scalable web applications using React and
            modern JavaScript. Actively seeking full-time or internship
            opportunities to learn, contribute, and grow in a dynamic
            environment.
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
              Open to Remote
            </div>

            <div className="resume-hl">
              <span className="hl-dot"></span>
              Full-Stack Expertise
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
