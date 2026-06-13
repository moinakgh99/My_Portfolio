import "../styles/Experience.css";

function Experience() {
  return (
    <section id="experience">
      <div className="section-wrapper">
        <p className="section-label">My Journey</p>

        <h2 className="section-title reveal">Experience &amp; Education</h2>

        <div className="timeline">

          {/* HackWithInfy 2026 Round 2 */}
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <p className="timeline-period">22 April 2026</p>

              <h3 className="timeline-role">
                Qualified Round 2 — HackWithInfy 2026
              </h3>

              <p className="timeline-company">
                @ Infosys National-Level Coding Competition
              </p>

              <p className="timeline-desc">
                Advanced to Round 2 of HackWithInfy 2026 by showcasing strong
                analytical thinking, algorithmic problem-solving, coding
                accuracy, and efficient implementation skills in a highly
                competitive national-level coding assessment conducted by
                Infosys.
              </p>

              <div className="timeline-tags">
                <span className="tl-chip">Algorithms</span>
                <span className="tl-chip">Data Structures</span>
                <span className="tl-chip">Coding Efficiency</span>
                <span className="tl-chip">Logical Reasoning</span>
              </div>
            </div>
          </div>

          {/* HackWithInfy 2026 Round 1 */}
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <p className="timeline-period">28 March 2026</p>

              <h3 className="timeline-role">
                Qualified Round 1 — HackWithInfy 2026
              </h3>

              <p className="timeline-company">
                @ Infosys National-Level Coding Competition
              </p>

              <p className="timeline-desc">
                Successfully qualified Round 1 of HackWithInfy 2026 by
                demonstrating strong proficiency in Data Structures &
                Algorithms, problem-solving and coding efficiency under
                competitive assessment conditions among a large pool of
                engineering students across India.
              </p>

              <div className="timeline-tags">
                <span className="tl-chip">DSA</span>
                <span className="tl-chip">Problem Solving</span>
                <span className="tl-chip">Competitive Programming</span>
              </div>
            </div>
          </div>

          {/* — Internship */}
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <p className="timeline-period">Sep 2025 – Nov 2025</p>
              <h3 className="timeline-role">
                AIML Project Intern — Network Intrusion Detection System
              </h3>

              <p className="timeline-company">
                @ Infosys Springboard Virtual Internship 6.0
              </p>

              <p className="timeline-desc">
                Developed an AI-powered Network Intrusion Detection System
                (NIDS) using machine learning models to analyze network traffic
                and detect anomalies in real time. Built an interactive
                Streamlit dashboard for visualization and insights.
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

          {/* Freelancing */}
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

          {/* Webathon Achievement */}
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

          {/* B.Tech */}
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

          {/*  Class 12 */}
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <p className="timeline-period">2023</p>
              <h3 className="timeline-role">Class 12 — Science</h3>
              <p className="timeline-company">@ Dehradun Public School</p>

              <ul className="timeline-desc">
                <li>Scored 92.8%</li>
                <li>Ranked 2nd in Science stream</li>
                <li>Ranked 3rd overall in school</li>
              </ul>
            </div>
          </div>

          {/*  Class 10 */}
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <p className="timeline-period">2021</p>
              <h3 className="timeline-role">Class 10</h3>
              <p className="timeline-company">@ Dehradun Public School</p>

              <ul className="timeline-desc">
                <li>Scored 94.8%</li>
                <li>Ranked 3rd in school</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
