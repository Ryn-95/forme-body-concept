import React from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Identity from './sections/Identity';
import Story from './sections/Story';
import RunnerImage from './sections/RunnerImage';
import FourPillars from './sections/FourPillars';
import Services from './sections/Services';
import Trust from './sections/Trust';
import Stakes from './sections/Stakes';
import Pricing from './sections/Pricing';
import Gallery from './sections/Gallery';
import Statistics from './sections/Statistics';
import FAQ from './sections/FAQ';
import Testimonials from './sections/Testimonials';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      
      {/* Section Hero avec ID */}
      <div id="hero">
        <Hero />
      </div>
      
      {/* Section Identité */}
      <Identity />
      
      {/* Section Histoire */}
      <Story />
      
      {/* Image Runner */}
      <RunnerImage />
      
      {/* Section 4 Piliers */}
      <FourPillars />
      
      {/* Section Services avec ID */}
      <div id="services">
        <Services />
      </div>
      
      {/* Section Confiance */}
      <Trust />
      
      {/* Section Cours & Tarifs avec ID */}
      <div id="cours">
        <Pricing />
      </div>
      
      {/* Section Enjeux */}
      <Stakes />
      
      {/* Section Galerie avec ID */}
      <div id="galerie">
        <Gallery />
      </div>
      
      {/* Section Statistiques */}
      <Statistics />
      
      {/* Section Témoignages */}
      <Testimonials />
      
      {/* Section FAQ/Contact avec ID */}
      <div id="contact">
        <FAQ />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
