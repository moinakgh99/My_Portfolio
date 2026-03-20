import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <section id="contact">
        <div className="section-wrapper">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title reveal">Contact Me</h2>

          <div className="contact-grid">
            {/* Left: info panel */}
            <div className="contact-info reveal reveal-delay-1">
              <p>
                I'm currently open to new opportunities. Whether you have a
                project idea, a question, or just want to say hi — my inbox is
                always open.
              </p>

              <div className="contact-detail">
                <div className="contact-icon">✉</div>
                <a href="mailto:ghoshjimoinak@gmail.com">
                  ghoshjimoinak@gmail.com
                </a>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">📍</div>
                <span>India (Remote OR Onsite)</span>
              </div>

              <div className="contact-socials">
                <a href="https://github.com/moinakgh99" className="social-btn">
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/moinak-ghosh-mernstack"
                  className="social-btn"
                >
                  LinkedIn
                </a>
                <a href="mailto:ghoshjimoinak@gmail.com" className="social-btn">
                  Email
                </a>
                <a
                  href="https://www.instagram.com/moinakk.ghosh_/"
                  className="social-btn"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Right: contact form */}
            <div className="reveal reveal-delay-2">
              <form className="contact-form" id="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="cf-name">Name</label>
                    <input
                      id="cf-name"
                      name="user_name" // ✅ IMPORTANT
                      type="text"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="cf-email">Email</label>
                    <input
                      id="cf-email"
                      name="user_email" // ✅ IMPORTANT
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="cf-subject">Subject</label>
                  <input
                    id="cf-subject"
                    name="subject" // ✅ IMPORTANT
                    type="text"
                    placeholder="Project enquiry / Collaboration"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="cf-message">Message</label>
                  <textarea
                    id="cf-message"
                    name="message" // ✅ IMPORTANT
                    placeholder="Tell me about your idea…"
                    required
                  ></textarea>
                </div>

                <div className="form-submit">
                  <span className="form-note">
                    I'll reply within <span className="accent">24 hrs</span>
                  </span>

                  <button type="submit" className="btn btn-primary">
                    Send Message →
                  </button>
                </div>
              </form>

              {/* Success message */}
              <div
                id="form-success"
                className="form-success"
                style={{ display: "none" }}
              >
                <span className="check">✅</span>
                <strong>Message sent!</strong>
                <span>Thanks — I'll be in touch soon.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer">
          <p className="footer-copy">
            Designed & Built by <span>Moinak Ghosh</span> · © 2026
          </p>

          <nav className="footer-links">
            <a href="#home">Top</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a
              href="https://github.com/moinakgh99"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Contact;
