import "../styles/Experience.css";

function Experience() {
  return (
    <section id="experience">
      <div className="section-wrapper">
        <p className="section-label">My Journey</p>

        <h2 className="section-title reveal">Experience &amp; Education</h2>

        <div className="timeline">
          {/* 1 — Internship */}
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <p className="timeline-period">Sep 2025 – Nov 2025</p>
              <h3 className="timeline-role">
                Project Lead — AI Network Intrusion Detection System
              </h3>
              <p className="timeline-company">
                @ Infosys Springboard Virtual Internship 6.0
              </p>

              <p className="timeline-desc">
                Led development of an AI-powered Network Intrusion Detection
                System using machine learning to analyze traffic and detect
                threats in real time. Built an interactive Streamlit dashboard
                for visualization.
              </p>

              <div className="timeline-tags">
                <span className="tl-chip">Python</span>
                <span className="tl-chip">Machine Learning</span>
                <span className="tl-chip">Streamlit</span>
                <span className="tl-chip">Scikit-learn</span>
                <span className="tl-chip">Pandas</span>
                <span className="tl-chip">NumPy</span>
                <span className="tl-chip">Plotly</span>
              </div>
            </div>
          </div>

          {/* 2 — Freelancing */}
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <p className="timeline-period">Sep 2023 – Present</p>
              <h3 className="timeline-role">Freelance Tutor</h3>
              <p className="timeline-company">@ Self-Employed</p>

              <p className="timeline-desc">
                Teaching Mathematics and Science to students up to Class 10,
                focusing on conceptual clarity and problem-solving skills.
              </p>

              <div className="timeline-tags">
                <span className="tl-chip">Teaching</span>
                <span className="tl-chip">Mathematics</span>
                <span className="tl-chip">Communication</span>
              </div>
            </div>
          </div>

          {/* 3 — Webathon Achievement (NEW CARD) */}
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <p className="timeline-period">2024</p>
              <h3 className="timeline-role">
                3rd Position — Full Stack Development Webathon
              </h3>
              <p className="timeline-company">
                @ ScholarHat (Dot Net Tricks Innovation Pvt. Ltd.)
              </p>

              <p className="timeline-desc">
                Secured 3rd position in a competitive full-stack web development
                hackathon in my First Year, showcasing frontend development and
                problem-solving skills.
              </p>

              <div className="timeline-tags">
                <span className="tl-chip">Frontend</span>
                <span className="tl-chip">React</span>
                <span className="tl-chip">Web Development</span>
              </div>
            </div>
          </div>

          {/* 4 — B.Tech */}
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <p className="timeline-period">Oct 2023 – July 2027</p>
              <h3 className="timeline-role">B.Tech — CSE (AI & ML)</h3>
              <p className="timeline-company">@ ABES Engineering College</p>

              <p className="timeline-desc">
                Pursuing undergraduate studies with focus on Data Structures,
                AI/ML, and Web Development while actively building projects.
              </p>

              <div className="timeline-tags">
                <span className="tl-chip">DSA</span>
                <span className="tl-chip">AI/ML</span>
                <span className="tl-chip">Frontend</span>
              </div>
            </div>
          </div>

          {/* 5 — Class 12 */}
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <p className="timeline-period">2023</p>
              <h3 className="timeline-role">Class 12 — Science</h3>
              <p className="timeline-company">@ Dehradun Public School</p>

              <ul className="timeline-desc">
                <li>Scored 92.8%</li>
                <li>Secured 2nd position in Science stream</li>
                <li>Secured 3rd position overall in school</li>
              </ul>
            </div>
          </div>

          {/* 6 — Class 10 */}
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <p className="timeline-period">2021</p>
              <h3 className="timeline-role">Class 10</h3>
              <p className="timeline-company">@ Dehradun Public School</p>

              <ul className="timeline-desc">
                <li>Scored 94.8%</li>
                <li>Secured 3rd position in school</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
