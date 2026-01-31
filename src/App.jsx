import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Vision from './components/Vision';
import About from './components/About';
import Domains from './components/Domains';
import Trust from './components/Trust';
import CaseStudies from './components/CaseStudies';
import Philosophy from './components/Philosophy';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <section id="vision"><Vision /></section>
        <About />
        <Domains />
        <Trust />
        <CaseStudies />
        <section id="philosophy"><Philosophy /></section>
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
