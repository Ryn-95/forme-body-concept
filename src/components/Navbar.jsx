import React, { useState, useEffect } from 'react';
import { DESIGN } from '../config/constants';
import Logo from './Logo';

const navItems = [
  { label: 'Accueil', id: 'hero' },
  { label: 'Services', id: 'services' },
  { label: 'Cours', id: 'cours' },
  { label: 'Galerie', id: 'galerie' },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Accueil');
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Détection du scroll avec cache de la navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Navbar devient plus petite après 50px
      setScrolled(currentScrollY > 50);
      
      // Cache la navbar en scrollant vers le bas, montre en scrollant vers le haut
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);

      // Détection de la section active
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = currentScrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(navItems[i].label);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveItem(item.label);
    
    const targetElement = document.getElementById(item.id);
    
    if (targetElement) {
      const navbarHeight = 120;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveItem('Accueil');
  };

  return (
    <>
      {/* Logo fixe en haut à gauche */}
      <div 
        className="fixed top-8 left-8 z-50 cursor-pointer transition-all duration-300"
        onClick={scrollToTop}
        style={{
          transform: scrolled ? 'scale(0.9)' : 'scale(1)',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="transform transition-transform duration-300 hover:scale-110">
          <Logo size="md" />
        </div>
      </div>

      {/* Navbar centrée avec effet de disparition */}
      <nav 
        className="fixed left-1/2 z-50 flex items-center justify-center px-4 transition-all duration-500 ease-out"
        style={{ 
          top: isVisible ? '40px' : '-100px',
          width: scrolled ? '32%' : '35%',
          minWidth: '450px',
          height: DESIGN.NAV.HEIGHT,
          transform: 'translateX(-50%)',
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Container avec backdrop blur */}
        <div 
          className="absolute inset-0 backdrop-blur-xl"
          style={{ 
            backgroundColor: `${DESIGN.COLORS.NAV_BLACK}${Math.round(DESIGN.NAV.OPACITY * 255).toString(16)}`,
            borderRadius: DESIGN.NAV_RADIUS,
            boxShadow: scrolled 
              ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05) inset' 
              : '0 10px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset',
            transition: 'all 0.3s ease',
          }}
        />
        
        {/* Navigation items */}
        <div className="relative flex items-center gap-1">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={(e) => handleNavClick(e, item)}
              className={`relative px-5 py-2.5 text-sm font-extralight tracking-widest transition-all duration-300 ease-out cursor-pointer uppercase overflow-hidden group ${
                activeItem === item.label
                  ? 'text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
              style={{ 
                fontWeight: 200,
                borderRadius: DESIGN.NAV_RADIUS,
              }}
            >
              {/* Background blanc pour l'item actif avec animation */}
              <div 
                className={`absolute inset-0 bg-white transition-all duration-500 ease-out ${
                  activeItem === item.label 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}
                style={{ 
                  borderRadius: DESIGN.NAV_RADIUS,
                  boxShadow: activeItem === item.label ? '0 4px 20px rgba(255, 255, 255, 0.3)' : 'none',
                }}
              />
              
              {/* Background hover subtil */}
              <div 
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{ borderRadius: DESIGN.NAV_RADIUS }}
              />
              
              {/* Texte */}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Bouton Contact */}
      <div 
        className="fixed right-8 z-50 transition-all duration-500 ease-out"
        style={{
          top: isVisible ? '40px' : '-100px',
          opacity: isVisible ? 1 : 0,
          transform: scrolled ? 'scale(0.95)' : 'scale(1)',
        }}
      >
        <button 
          onClick={() => {
            const contactElement = document.getElementById('contact');
            if (contactElement) {
              const navbarHeight = 120;
              const targetPosition = contactElement.offsetTop - navbarHeight;
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              });
            }
          }}
          className="group relative px-10 py-2.5 text-white text-sm tracking-widest font-extralight uppercase overflow-hidden transition-all duration-300 ease-out hover:scale-105"
          style={{ 
            borderRadius: DESIGN.NAV_RADIUS,
            backgroundColor: DESIGN.COLORS.PURE_BLACK,
            fontWeight: 200,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Effet hover inversé */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" style={{ borderRadius: DESIGN.NAV_RADIUS }} />
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">
            Contact
          </span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
