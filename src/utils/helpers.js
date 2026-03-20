// ============================================================
//  utils/helpers.js — Utility functions
// ============================================================

/**
 * Scroll-reveal: observe elements with class .reveal
 * and add .visible when they enter the viewport
 */
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        // stagger effect using inline delay
        el.style.transitionDelay = "0.1s";

        el.classList.add("visible");

        observer.unobserve(el);
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px", // trigger slightly earlier
    },
  );

  elements.forEach((el) => observer.observe(el));
}

/**
 * Typing effect — cycles through an array of strings
 * @param {HTMLElement} el   - element whose textContent will be typed
 * @param {string[]}    words
 * @param {number}      typeSpeed  ms per char
 * @param {number}      deleteSpeed ms per char when deleting
 * @param {number}      pause      ms to wait before deleting
 */
function typeWriter(el, words, typeSpeed = 90, deleteSpeed = 50, pause = 1800) {
  let wordIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function tick() {
    const word = words[wordIdx % words.length];

    if (isDeleting) {
      charIdx--;
      el.textContent = word.slice(0, charIdx);
    } else {
      charIdx++;
      el.textContent = word.slice(0, charIdx);
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx === word.length) {
      delay = pause;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      wordIdx++;
      delay = 300;
    }

    setTimeout(tick, delay);
  }

  tick();
}

/**
 * Animate skill progress bars when they enter the viewport
 */
function initSkillBars() {
  const bars = document.querySelectorAll(".skill-bar-fill");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const pct = e.target.dataset.pct || "0";
          e.target.style.width = pct + "%";
          e.target.classList.add("animated");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.3 },
  );
  bars.forEach((bar) => observer.observe(bar));
}

/**
 * Custom cursor
 */
function initCursor() {
  const dot = document.getElementById("cursor");
  const ring = document.getElementById("cursor-ring");
  if (!dot || !ring) return;

  let rx = 0,
    ry = 0; // ring position (lerped)
  let mx = 0,
    my = 0; // mouse position

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top = my + "px";
  });

  // Smooth ring follow
  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover states
  document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      dot.classList.add("hover");
      ring.classList.add("hover");
    });
    el.addEventListener("mouseleave", () => {
      dot.classList.remove("hover");
      ring.classList.remove("hover");
    });
  });
}

/**
 * Navbar active link on scroll + scrolled class
 */
function initNavbar() {
  const nav = document.querySelector(".navbar");
  const links = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    // Scrolled style
    if (window.scrollY > 60) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");

    // Active link
    let current = "";
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
    });
    links.forEach((a) => {
      a.classList.remove("active");
      if (a.getAttribute("href") === "#" + current) a.classList.add("active");
    });
  });

  // Mobile menu toggle
  const toggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      mobileMenu.classList.toggle("open");
      document.body.style.overflow = mobileMenu.classList.contains("open")
        ? "hidden"
        : "";
    });
    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        toggle.classList.remove("open");
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }
}

/**
 * Contact form
 */

import emailjs from "emailjs-com";

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const btn = form.querySelector('[type="submit"]');
    btn.textContent = "Sending…";
    btn.disabled = true;

    emailjs
      .sendForm(
        "service_c157p5g",
        "template_w6ltj8m",
        form,
        "U8tUlUUP-baO9_NBw",
      )
      .then(() => {
        const successEl = document.getElementById("form-success");

        form.style.display = "none";
        if (successEl) successEl.style.display = "flex";

        form.reset(); // optional reset
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);

        alert("Failed to send message ❌");

        btn.textContent = "Send Message →";
        btn.disabled = false;
      });
  });
}

export {
  initScrollReveal,
  typeWriter,
  initSkillBars,
  initCursor,
  initNavbar,
  initContactForm,
};
