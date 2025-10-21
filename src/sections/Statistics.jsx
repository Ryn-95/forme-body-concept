import React, { useEffect, useState, useRef } from 'react';
import { DESIGN } from '../config/constants';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      number: 2021,
      label: "première année corporate",
      suffix: "",
    },
    {
      number: 25,
      label: "professionnels du fitness",
      suffix: "",
    },
    {
      number: 5,
      label: "sites en france",
      suffix: "",
    },
    {
      number: 500,
      label: "adhérents",
      suffix: "+",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  const AnimatedNumber = ({ target, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, target]);

    return <>{count}</>;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ 
        paddingTop: DESIGN.SECTION_SPACING, 
        paddingBottom: DESIGN.SECTION_SPACING,
        background: 'linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 50%, #F5F5F5 100%)',
      }}
    >
      {/* Effet de background subtil */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.02) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.02) 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Titre */}
        <div className="text-center mb-20">
          <h2 
            className="uppercase mb-4"
            style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 100,
              letterSpacing: '0.2em',
              color: '#000000',
            }}
          >
            FORME<span style={{ fontWeight: 600 }}>BODYCONCEPT</span>
          </h2>
          
          <p 
            className="italic"
            style={{ 
              fontSize: '16px',
              fontWeight: 200,
              color: '#888888',
              letterSpacing: '0.1em',
            }}
          >
            en chiffres
          </p>

          {/* Ligne décorative */}
          <div 
            className="w-24 mx-auto mt-8"
            style={{ 
              height: '1px',
              backgroundColor: '#D3D3D3',
            }}
          />
        </div>

        {/* Statistiques avec cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative text-center transform transition-all duration-500 hover:scale-105"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Card container */}
              <div 
                className="relative p-10 overflow-hidden"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  borderRadius: DESIGN.RADIUS,
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                }}
              >
                {/* Effet hover subtil */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.02) 0%, transparent 100%)',
                  }}
                />

                {/* Numéro en arrière-plan */}
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ 
                    fontSize: 'clamp(100px, 15vw, 150px)',
                    fontWeight: 100,
                    color: '#000000',
                    opacity: 0.03,
                    lineHeight: '1',
                    pointerEvents: 'none',
                  }}
                >
                  {index + 1}
                </div>

                {/* Contenu */}
                <div className="relative z-10">
                  {/* Chiffre */}
                  <div 
                    className="mb-4"
                    style={{ 
                      fontSize: 'clamp(48px, 6vw, 72px)',
                      fontWeight: 100,
                      color: '#000000',
                      lineHeight: '1',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {isVisible ? <AnimatedNumber target={stat.number} isVisible={isVisible} /> : '0'}
                    <span style={{ fontSize: '0.6em', marginLeft: '2px' }}>{stat.suffix}</span>
                  </div>

                  {/* Ligne séparatrice */}
                  <div 
                    className="w-12 h-px mx-auto mb-4 transition-all duration-300 group-hover:w-20"
                    style={{ 
                      backgroundColor: '#000000',
                      opacity: 0.2,
                    }}
                  />

                  {/* Label */}
                  <p 
                    style={{ 
                      fontSize: '13px',
                      fontWeight: 300,
                      color: '#666666',
                      lineHeight: '1.6',
                      letterSpacing: '0.05em',
                      textTransform: 'lowercase',
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
