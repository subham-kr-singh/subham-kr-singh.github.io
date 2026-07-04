import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Loader        from "./components/Loader";
import CursorTrail   from "./components/CursorTrail";
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import StatusBoard   from "./components/StatusBoard";
import About         from "./components/About";
import Experience    from "./components/Experience";
import Projects      from "./components/Projects";
import Skills        from "./components/Skills";
import Achievements  from "./components/Achievements";
import Contact       from "./components/Contact";
import Footer        from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loaded, setLoaded] = useState(false);

  /* Refresh ScrollTrigger after loader exits */
  useEffect(() => {
    if (loaded) {
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }
  }, [loaded]);

  return (
    <>
      {/* Cursor trail — always active */}
      <CursorTrail />

      {/* Loader */}
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      {/* Main site */}
      <div
        style={{
          visibility: loaded ? "visible" : "hidden",
          background: "var(--color-void)",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <StatusBoard />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
