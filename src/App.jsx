import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import  Sidebar  from './components/Sidebar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Sidebar/>
      <Navbar />

      <section id="home" className="pt-20">
        <Hero />
      </section>

      <section id="about" className="pt-20">
        <About />
      </section>

      <section id="skills" className="pt-20">
        <Skills />
      </section>

      <section id="projects" className="pt-20">
        <Projects />
      </section>

      <section id="experience" className="pt-20">
        <Experience />
      </section>

      <section id="contact" className="pt-20">
        <Contact />
      </section>

        <Footer />
    </div>
  );
};

export default App;
