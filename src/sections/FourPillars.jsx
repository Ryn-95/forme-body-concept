import React from 'react';
import { DESIGN } from '../config/constants';

const FourPillars = () => {
  const pillars = [
    {
      number: '01',
      title: "L'activité sportive",
      description: "Des programmes adaptés pour tous les niveaux",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2a4 4 0 100 8 4 4 0 000-8zM7 14a2 2 0 00-2 2v6h14v-6a2 2 0 00-2-2H7z"/>
          <path d="M5.5 11.5L7 14l-1.5 2.5M18.5 11.5L17 14l1.5 2.5"/>
        </svg>
      ),
    },
    {
      number: '02',
      title: "La nutrition",
      description: "Conseils et accompagnement personnalisés",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
          <line x1="6" y1="1" x2="6" y2="4"/>
          <line x1="10" y1="1" x2="10" y2="4"/>
          <line x1="14" y1="1" x2="14" y2="4"/>
        </svg>
      ),
    },
    {
      number: '03',
      title: "La pleine conscience",
      description: "Méditation et gestion du stress",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
    },
    {
      number: '04',
      title: "La cohésion",
      description: "Renforcer l'esprit d'équipe",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
    },
  ];

  return (
    <section 
      className="relative w-full bg-white"
      style={{ paddingTop: DESIGN.SECTION_SPACING, paddingBottom: DESIGN.SECTION_SPACING }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Grand "4" en arrière-plan */}
        <div className="relative mb-20">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black select-none pointer-events-none"
            style={{ 
              fontSize: 'clamp(220px, 25vw, 400px)',
              fontWeight: 100,
              opacity: 0.08,
              lineHeight: '1',
            }}
          >
            4
          </div>

          {/* Titre PILIERS */}
          <h2 
            className="text-black uppercase text-center relative z-10"
            style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 100,
              letterSpacing: '0.35em',
              paddingTop: '80px',
            }}
          >
            PILIERS
          </h2>
        </div>

        {/* Sous-texte */}
        <p 
          className="text-center max-w-2xl mx-auto mb-20"
          style={{ 
            fontSize: '16px',
            fontWeight: DESIGN.FONT.WEIGHT.ULTRA_LIGHT,
            color: '#888888',
            lineHeight: '1.7',
          }}
        >
          Pour un Smart service humain et digital
        </p>

        {/* Grid 2x2 des 4 piliers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="relative bg-card-bg p-12 overflow-hidden group hover:shadow-xl transition-all duration-500"
              style={{ 
                borderRadius: DESIGN.RADIUS,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
              }}
            >
              {/* Numéro énorme en arrière-plan */}
              <div 
                className="absolute top-8 right-8 text-black select-none pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:opacity-15"
                style={{ 
                  fontSize: '120px',
                  fontWeight: 100,
                  opacity: 0.08,
                  lineHeight: '1',
                }}
              >
                {pillar.number}
              </div>

              {/* Contenu */}
              <div className="relative z-10 space-y-6">
                {/* Icône */}
                <div className="text-black opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {pillar.icon}
                </div>

                <h3 
                  className="text-black"
                  style={{ 
                    fontSize: '22px',
                    fontWeight: 400,
                    letterSpacing: '0.03em',
                    lineHeight: '1.4',
                  }}
                >
                  {pillar.title}
                </h3>
                
                <p 
                  style={{ 
                    fontSize: '15px',
                    fontWeight: 200,
                    color: '#666666',
                    lineHeight: '1.8',
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourPillars;

