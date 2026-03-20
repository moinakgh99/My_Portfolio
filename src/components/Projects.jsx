import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects">
      <div className="section-wrapper">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title reveal">Featured Projects</h2>

        <div className="projects-grid">
          {/* Project 1 */}
          <article className="project-card reveal reveal-delay-1">
            <div className="project-top">
              <div className="project-bg-num">01</div>
              <span className="project-emoji">🛡️</span>
              <span className="project-type-tag">Python</span>
            </div>

            <div className="project-body">
              <h3 className="project-title">SentinelNet-AI</h3>

              <p className="project-desc">
                AI-powered Network Intrusion Detection System that analyzes
                network traffic and identifies malicious activity in real time,
                with an interactive dashboard for monitoring and insights.
              </p>

              <div className="project-stack">
                <span className="stack-chip">Python</span>
                <span className="stack-chip">ML</span>
                <span className="stack-chip">Streamlit</span>
                <span className="stack-chip">Scikit-learn</span>
                <span className="stack-chip">Pandas</span>
                <span className="stack-chip">NumPy</span>
                <span className="stack-chip">Plotly</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/moinakgh99/SentinelNet-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  GitHub
                </a>

                <a
                  href="https://sentinelnet-ai.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>

          {/* Project 2 */}
          <article className="project-card reveal reveal-delay-2">
            <div className="project-top">
              <div className="project-bg-num">02</div>
              <span className="project-emoji">🚨</span>
              <span className="project-type-tag">MERN</span>
            </div>

            <div className="project-body">
              <h3 className="project-title">Durlassa</h3>

              <p className="project-desc">
                Women-centric safety platform designed to enhance personal
                security through technology, awareness, and community support.
                The platform focuses on providing real-time safety tools,
                emergency assistance, and a supportive ecosystem to empower
                women in vulnerable situations.
              </p>

              <div className="project-stack">
                <span className="stack-chip">MERN Stack</span>
                <span className="stack-chip">Maps API</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/moinakgh99/Durlassa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  GitHub
                </a>

                <a
                  href="https://durlassa.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>

          {/* Project 3 */}
          <article className="project-card reveal reveal-delay-3">
            <div className="project-top">
              <div className="project-bg-num">03</div>
              <span className="project-emoji">🌦️</span>
              <span className="project-type-tag">Frontend</span>
            </div>

            <div className="project-body">
              <h3 className="project-title">Weathix</h3>

              <p className="project-desc">
                Smart weather application providing real-time forecasts, dynamic
                visualizations, and accurate climate insights through a clean
                and interactive interface.
              </p>

              <div className="project-stack">
                <span className="stack-chip">HTML</span>
                <span className="stack-chip">CSS</span>
                <span className="stack-chip">JavaScript</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/moinakgh99/Weathix-Weather-Application"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  GitHub
                </a>

                <a
                  href="https://weathix-weather-application.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
