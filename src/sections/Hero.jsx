import React, { useEffect, useState } from 'react';
import { DESIGN } from '../config/constants';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Image avec parallax effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full transition-transform duration-1000"
          style={{
            backgroundImage: 'url(/images/lever-soleil.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: isVisible ? 'scale(1)' : 'scale(1.1)',
          }}
        />
        {/* Overlay dégradé sophistiqué */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)',
          }}
        />
        
        {/* Effet de vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
          }}
        />
      </div>

      {/* Contenu centré avec animation */}
      <div 
        className="relative z-10 text-center px-8 transition-all duration-1000"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        {/* Petit texte au-dessus */}
        <p 
          className="mb-6 uppercase"
          style={{ 
            fontSize: '12px',
            fontWeight: 200,
            color: 'rgba(255, 255, 255, 0.7)',
            letterSpacing: '0.3em',
          }}
        >
          Bienvenue
        </p>

        {/* Titre principal */}
        <h1 
          className="text-white uppercase mb-6"
          style={{ 
            fontSize: 'clamp(48px, 7vw, 80px)',
            fontWeight: 100,
            letterSpacing: '0.2em',
            lineHeight: '1.2',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          }}
        >
          Bougez, Performez,<br />Excellez !
        </h1>

        {/* Ligne décorative animée */}
        <div className="flex items-center justify-center mb-8">
          <div 
            className="transition-all duration-1000"
            style={{ 
              width: isVisible ? '60px' : '0px',
              height: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            }} 
          />
          <div 
            style={{ 
              width: '8px', 
              height: '8px', 
              backgroundColor: '#FFFFFF', 
              borderRadius: '50%',
              margin: '0 16px',
              opacity: 0.8,
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
            }} 
          />
          <div 
            className="transition-all duration-1000"
            style={{ 
              width: isVisible ? '60px' : '0px',
              height: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            }} 
          />
        </div>
        
        {/* Sous-titre */}
        <p 
          className="text-center max-w-2xl mx-auto uppercase"
          style={{ 
            fontSize: '15px',
            fontWeight: 200,
            color: 'rgba(255, 255, 255, 0.9)',
            letterSpacing: '0.2em',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          Dépassez vos limites, révélez votre potentiel
        </p>
      </div>

      {/* Indicateur de scroll amélioré */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
        <span 
          className="text-white text-xs uppercase tracking-widest"
          style={{
            fontWeight: 200,
            opacity: 0.7,
          }}
        >
          Scroll
        </span>
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="rgba(255, 255, 255, 0.7)" 
          strokeWidth="1.5" 
          viewBox="0 0 24 24"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
