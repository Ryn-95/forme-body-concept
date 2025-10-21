import React, { useEffect, useState, useRef } from 'react';
import { DESIGN } from '../config/constants';
import Logo from '../components/Logo';

const Identity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full flex flex-col items-center justify-center bg-white overflow-hidden"
      style={{ paddingTop: DESIGN.SECTION_SPACING, paddingBottom: DESIGN.SECTION_SPACING }}
    >
      {/* Effet de background subtil */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.02) 0%, transparent 70%)',
        }}
      />

      {/* Contenu avec animation */}
      <div 
        className="relative transition-all duration-1000 flex flex-col items-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        }}
      >
        {/* Logo centré avec effet */}
        <div className="mb-16 transform transition-all duration-700 hover:scale-105 flex justify-center">
          <Logo size="xl" />
        </div>

        {/* Titre FORME BODY CONCEPT */}
        <h2 
          className="text-black uppercase text-center mb-8"
          style={{ 
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 100,
            letterSpacing: '0.4em',
            lineHeight: '1.5',
          }}
        >
          FORME BODY
          <br />
          CONCEPT
        </h2>

        {/* Ligne décorative avec animation */}
        <div className="flex items-center justify-center mb-10">
          <div 
            className="transition-all duration-1000"
            style={{ 
              width: isVisible ? '50px' : '0px',
              height: '1px',
              backgroundColor: DESIGN.COLORS.DIVIDER_GRAY,
            }} 
          />
          <div 
            style={{ 
              width: '6px', 
              height: '6px', 
              backgroundColor: '#000000', 
              borderRadius: '50%',
              margin: '0 16px',
              opacity: 0.3,
            }} 
          />
          <div 
            className="transition-all duration-1000"
            style={{ 
              width: isVisible ? '50px' : '0px',
              height: '1px',
              backgroundColor: DESIGN.COLORS.DIVIDER_GRAY,
            }} 
          />
        </div>

        {/* Sous-titre */}
        <p 
          className="text-center uppercase"
          style={{ 
            fontSize: '13px',
            fontWeight: 200,
            color: '#999999',
            letterSpacing: '0.15em',
          }}
        >
          Performance & Bien-être depuis 2021
        </p>

        {/* Citation inspirante */}
        <p 
          className="text-center max-w-2xl mx-auto mt-12 italic"
          style={{ 
            fontSize: '16px',
            fontWeight: 200,
            color: '#666666',
            lineHeight: '1.8',
            letterSpacing: '0.02em',
          }}
        >
          "L'excellence sportive au service de votre transformation"
        </p>
      </div>
    </section>
  );
};

export default Identity;
