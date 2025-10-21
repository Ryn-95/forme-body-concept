import React from 'react';
import { DESIGN } from '../config/constants';

const Pricing = () => {
  const courses = [
    {
      title: "MUSCULATION",
      description: "Séances de musculation et renforcement musculaire adaptées à tous niveaux. Travail avec poids et haltères pour améliorer force et endurance.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
      duration: "1h",
      capacity: "Max 12 pers.",
    },
    {
      title: "COLLECTIFS",
      description: "Body Pump, Body Combat, Body Attack, CAF, RPM, TRX, Body Zen, Body Stretch, Cross Training, Zumba. Sessions dynamiques de 45 minutes.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
      duration: "45min",
      capacity: "Max 12 pers.",
    },
    {
      title: "PILATES",
      description: "Entraînement axé sur le renforcement des muscles profonds, amélioration de la posture, flexibilité et force du tronc.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
      duration: "45min",
      capacity: "Max 12 pers.",
    },
    {
      title: "YOGA",
      description: "Combinaison de postures, exercices de respiration et méditation pour améliorer souplesse, réduire stress et renforcer le corps.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
      duration: "1h",
      capacity: "Max 12 pers.",
    },
    {
      title: "SELF-DÉFENSE",
      description: "Initiation aux techniques de self-défense. Amélioration de la confiance en soi, réactivité et condition physique.",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800",
      duration: "1h",
      capacity: "Max 12 pers.",
    },
  ];

  return (
    <section 
      className="relative w-full"
      style={{ 
        paddingTop: DESIGN.SECTION_SPACING, 
        paddingBottom: DESIGN.SECTION_SPACING,
        backgroundColor: DESIGN.COLORS.PURE_BLACK,
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 
            className="text-white uppercase mb-6"
            style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 100,
              letterSpacing: '0.3em',
            }}
          >
            NOS COURS <span style={{ color: '#C5C5C5' }}>&</span> TARIFS
          </h2>

          {/* Ligne décorative */}
          <div 
            className="mx-auto mb-8"
            style={{ 
              width: '80px',
              height: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            }}
          />

          {/* Sous-texte */}
          <p 
            className="max-w-2xl mx-auto"
            style={{ 
              fontSize: '15px',
              fontWeight: 200,
              color: DESIGN.COLORS.TEXT_GRAY_LIGHT,
              lineHeight: '1.7',
              letterSpacing: '0.05em',
            }}
          >
            Des programmes sur-mesure pour chaque entreprise
          </p>
        </div>

        {/* Grid des cours - 2 colonnes sur desktop, 1 sur mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden cursor-pointer"
              style={{ 
                borderRadius: DESIGN.RADIUS,
                height: '500px',
                backgroundColor: '#1A1A1A',
              }}
            >
              {/* Image de fond */}
              <div className="absolute inset-0">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    filter: 'brightness(0.7)',
                  }}
                />
                {/* Overlay dégradé noir */}
                <div 
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 70%, transparent 100%)',
                  }}
                />
              </div>

              {/* Contenu */}
              <div className="relative h-full flex flex-col justify-end p-8">
                {/* Badge titre en haut à gauche */}
                <div 
                  className="absolute top-8 left-8"
                  style={{
                    padding: '8px 20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '50px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <span 
                    className="text-white uppercase"
                    style={{ 
                      fontSize: '11px',
                      fontWeight: 300,
                      letterSpacing: '0.2em',
                    }}
                  >
                    {course.title}
                  </span>
                </div>

                {/* Description et infos en bas */}
                <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                  {/* Titre répété en grand */}
                  <h3 
                    className="text-white uppercase mb-4"
                    style={{ 
                      fontSize: 'clamp(24px, 3vw, 32px)',
                      fontWeight: 100,
                      letterSpacing: '0.15em',
                      lineHeight: '1.2',
                    }}
                  >
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-white mb-6"
                    style={{ 
                      fontSize: '14px',
                      fontWeight: 200,
                      lineHeight: '1.8',
                      color: 'rgba(255, 255, 255, 0.85)',
                      maxWidth: '90%',
                    }}
                  >
                    {course.description}
                  </p>

                  {/* Séparateur */}
                  <div 
                    className="w-16 mb-4 opacity-0 group-hover:opacity-100 group-hover:w-24 transition-all duration-500"
                    style={{ 
                      height: '1px',
                      backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    }}
                  />

                  {/* Icônes durée et capacité */}
                  <div className="flex items-center gap-8 text-white">
                    <div className="flex items-center gap-3">
                      <div 
                        className="flex items-center justify-center"
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="1.5" 
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                      </div>
                      <span 
                        style={{ 
                          fontSize: '14px',
                          fontWeight: 200,
                          letterSpacing: '0.05em',
                        }}
                      >
                        {course.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div 
                        className="flex items-center justify-center"
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="1.5" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <span 
                        style={{ 
                          fontSize: '14px',
                          fontWeight: 200,
                          letterSpacing: '0.05em',
                        }}
                      >
                        {course.capacity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bordure subtile au hover */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: DESIGN.RADIUS,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
