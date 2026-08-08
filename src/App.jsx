import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIBuild from './components/WhatIBuild';
import Projects from './components/Projects';
import Skills from './components/Skills';
import HowIBuild from './components/HowIBuild';
import About from './components/About';
import Journey from './components/Journey';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIBuild />
        <Projects />
        <Skills />
        <HowIBuild />
        <Journey />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

