import React, { useEffect, useState, useRef } from 'react';
import { DESIGN } from '../config/constants';

const Trust = () => {
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

  const clients = [
    {
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
      label: 'ENTREPRISES',
      description: 'Solutions complètes pour entreprises',
    },
    {
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      label: 'START-UPS',
      description: 'Accompagnement startup',
    },
    {
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <path d="M9 22V12h6v10" />
        </svg>
      ),
      label: 'PME',
      description: 'Programmes sur-mesure PME',
    },
    {
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        </svg>
      ),
      label: 'GRANDS GROUPES',
      description: 'Solutions entreprises CAC40',
    },
    {
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4v18" />
          <path d="M19 21V11l-6-4" />
          <path d="M9 9v.01" />
          <path d="M9 12v.01" />
          <path d="M9 15v.01" />
          <path d="M9 18v.01" />
        </svg>
      ),
      label: 'ADMINISTRATIONS',
      description: 'Secteur public & collectivités',
    },
    {
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      label: 'ASSOCIATIONS',
      description: 'Solutions associatives',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ 
        paddingTop: '100px', 
        paddingBottom: '100px',
        background: 'linear-gradient(to bottom, #FFFFFF 0%, #FAFAFA 100%)',
      }}
    >
      {/* Effet de background subtil */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(0,0,0,0.02) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.02) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-8 relative">
        {/* En-tête de section avec animation */}
        <div 
          className="text-center mb-16 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          {/* Titre */}
          <h2 
            className="text-black uppercase mb-4"
            style={{ 
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 100,
              letterSpacing: '0.3em',
            }}
          >
            ILS NOUS FONT CONFIANCE
          </h2>

          {/* Ligne décorative avec point */}
          <div className="flex items-center justify-center mb-6">
            <div 
              className="transition-all duration-1000"
              style={{ 
                width: isVisible ? '50px' : '0px',
                height: '1px',
                backgroundColor: '#D3D3D3',
              }} 
            />
            <div 
              style={{ 
                width: '6px', 
                height: '6px', 
                backgroundColor: '#000000', 
                borderRadius: '50%',
                margin: '0 12px',
                opacity: 0.3,
              }} 
            />
            <div 
              className="transition-all duration-1000"
              style={{ 
                width: isVisible ? '50px' : '0px',
                height: '1px',
                backgroundColor: '#D3D3D3',
              }} 
            />
          </div>

          {/* Sous-texte */}
          <p 
            className="max-w-2xl mx-auto"
            style={{ 
              fontSize: '15px',
              fontWeight: 200,
              color: '#888888',
              lineHeight: '1.7',
              letterSpacing: '0.03em',
            }}
          >
            Des solutions adaptées à tous types d'organisations
          </p>
        </div>

        {/* Grid 3x2 des types de clients avec animations décalées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden cursor-pointer transition-all duration-500"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Container avec dégradé au hover */}
              <div 
                className="relative p-10 h-full flex flex-col items-center justify-center text-center transition-all duration-500"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  borderRadius: DESIGN.RADIUS,
                  border: '1px solid #F0F0F0',
                  minHeight: '240px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                }}
              >
                {/* Effet de brillance au hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.02) 50%, transparent 100%)',
                    borderRadius: DESIGN.RADIUS,
                  }}
                />

                {/* Numéro en arrière-plan */}
                <div 
                  className="absolute top-4 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ 
                    fontSize: '80px',
                    fontWeight: 100,
                    color: '#000000',
                    opacity: 0.03,
                    lineHeight: '1',
                  }}
                >
                  {index + 1}
                </div>

                {/* Contenu */}
                <div className="relative z-10 space-y-4">
                  {/* Icône avec container */}
                  <div 
                    className="w-20 h-20 mx-auto flex items-center justify-center mb-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      backgroundColor: '#FAFAFA',
                      borderRadius: '50%',
                      border: '1px solid #F0F0F0',
                    }}
                  >
                    <div className="text-black opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {client.icon}
                    </div>
                  </div>

                  {/* Label */}
                  <h3 
                    className="uppercase transition-all duration-300"
                    style={{ 
                      fontSize: '13px',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      color: '#000000',
                    }}
                  >
                    {client.label}
                  </h3>

                  {/* Ligne séparatrice */}
                  <div 
                    className="w-8 h-px mx-auto opacity-0 group-hover:opacity-100 group-hover:w-16 transition-all duration-500"
                    style={{ 
                      backgroundColor: '#000000',
                      opacity: 0.2,
                    }}
                  />

                  {/* Description (apparaît au hover) */}
                  <p 
                    className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                    style={{ 
                      fontSize: '12px',
                      fontWeight: 200,
                      color: '#666666',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {client.description}
                  </p>
                </div>

                {/* Bordure qui apparaît au hover */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: DESIGN.RADIUS,
                  }}
                />
              </div>

              {/* Ombre qui s'intensifie au hover */}
              <div 
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  background: 'radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, transparent 70%)',
                  transform: 'translateY(10px)',
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA en bas */}
        <div 
          className="text-center mt-16 transition-all duration-1000 delay-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <p 
            className="italic"
            style={{ 
              fontSize: '14px',
              fontWeight: 200,
              color: '#999999',
              letterSpacing: '0.05em',
            }}
          >
            Rejoignez-les et transformez votre organisation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trust;
