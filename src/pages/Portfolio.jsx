import { lazy, Suspense } from "react";
import { useFadeIn } from "../hooks/index.js";
import Navbar from "../component/Navbar.jsx";
import Hero from "../component/Hero.jsx";
import "./styles.css";

// Lazy-load below-fold sections — not needed until user scrolls
const Skills     = lazy(() => import("../component/Skills.jsx"));
const Projects   = lazy(() => import("../component/Projects.jsx"));
const About      = lazy(() => import("../component/About.jsx"));
const Education  = lazy(() => import("../component/Education.jsx"));
const Contact    = lazy(() => import("../component/Contact.jsx"));
const Footer     = lazy(() => import("../component/Footer.jsx"));

// Minimal fallback — invisible, no layout shift
function SectionFallback() {
  return <div style={{ minHeight: "200px" }} aria-hidden="true" />;
}

export default function Portfolio() {
  useFadeIn();

  return (
    <div>
      <div className="grid-bg" />
      <Navbar />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}


