import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

import {
  initCursor,
  initScrollReveal,
  initSkillBars,
  initContactForm,
} from "./utils/helpers";

function App() {
  useEffect(() => {
    setTimeout(() => {
      initScrollReveal();
      initCursor();
      initSkillBars();
      initContactForm();
    }, 100); // <-- THIS FIXES YOUR ISSUE
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
