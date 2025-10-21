import React from 'react';
import { DESIGN } from '../config/constants';

const Testimonials = () => {
  const testimonial = {
    quote: "La diversité des cours proposés et la qualité des coachs font toute la différence. Nos collaborateurs attendent avec impatience chaque session !",
    author: "Laura Chen",
    role: "RH",
    company: "GLOBALTECH",
    initials: "LC",
  };

  return (
    <section 
      className="relative w-full bg-white"
      style={{ paddingTop: DESIGN.SECTION_SPACING, paddingBottom: DESIGN.SECTION_SPACING }}
    >
      <div className="max-w-4xl mx-auto px-8">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 
            className="uppercase mb-6"
            style={{ 
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 100,
              letterSpacing: '0.25em',
              color: '#000000',
            }}
          >
            CE QU'ILS EN DISENT
          </h2>
          
          {/* Ligne décorative */}
          <div 
            className="w-24 mx-auto"
            style={{ 
              height: '1px',
              backgroundColor: '#D3D3D3',
            }}
          />
        </div>

        {/* Carte témoignage */}
        <div 
          className="group relative bg-white p-12 md:p-16 text-center transition-all duration-500 hover:shadow-2xl"
          style={{ 
            borderRadius: DESIGN.RADIUS,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* Effet de brillance au hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
              borderRadius: DESIGN.RADIUS,
            }}
          />

          {/* Guillemets décoratifs */}
          <div 
            className="absolute top-8 left-8 opacity-10"
            style={{ 
              fontSize: 'clamp(60px, 8vw, 100px)',
              fontWeight: 100,
              color: '#000000',
              lineHeight: '1',
              fontFamily: 'Georgia, serif',
            }}
          >
            "
          </div>

          {/* Étoiles */}
          <div className="flex justify-center gap-1.5 mb-8">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#FFB800"
                stroke="none"
                className="transition-transform duration-300 hover:scale-125"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          {/* Citation */}
          <blockquote 
            className="relative mb-12"
            style={{ 
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              fontWeight: 200,
              fontStyle: 'italic',
              color: '#1A1A1A',
              lineHeight: '1.8',
              letterSpacing: '0.02em',
            }}
          >
            {testimonial.quote}
          </blockquote>

          {/* Séparateur élégant */}
          <div className="flex items-center justify-center mb-10">
            <div style={{ width: '40px', height: '1px', backgroundColor: '#D3D3D3' }} />
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
            <div style={{ width: '40px', height: '1px', backgroundColor: '#D3D3D3' }} />
          </div>

          {/* Auteur */}
          <div className="flex flex-col items-center gap-5">
            {/* Avatar avec initiales */}
            <div 
              className="relative w-20 h-20 rounded-full flex items-center justify-center text-white transform transition-all duration-300 group-hover:scale-110"
              style={{ 
                backgroundColor: '#000000',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              }}
            >
              <span 
                style={{ 
                  fontSize: '22px',
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                }}
              >
                {testimonial.initials}
              </span>
              
              {/* Ring décoratif */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  border: '2px solid #000000',
                  transform: 'scale(1.15)',
                  opacity: 0.1,
                }}
              />
            </div>

            {/* Informations */}
            <div>
              <p 
                style={{ 
                  fontSize: '20px',
                  fontWeight: 400,
                  color: '#000000',
                  marginBottom: '6px',
                  letterSpacing: '0.02em',
                }}
              >
                {testimonial.author}
              </p>
              <p 
                style={{ 
                  fontSize: '14px',
                  fontWeight: 200,
                  color: '#888888',
                  marginBottom: '10px',
                  letterSpacing: '0.03em',
                }}
              >
                {testimonial.role}
              </p>
              <p 
                className="uppercase"
                style={{ 
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#000000',
                  letterSpacing: '0.2em',
                }}
              >
                {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
