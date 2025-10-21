import React, { useEffect, useState, useRef } from 'react';
import { DESIGN } from '../config/constants';

const Story = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      className="relative w-full bg-white overflow-hidden"
      style={{ paddingTop: '100px', paddingBottom: '100px' }}
    >
      {/* Background décoratif */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full opacity-5"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, #000000 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-8 relative">
        {/* Titre avec animation */}
        <div 
          className="text-center mb-12 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <h2 
            className="text-black uppercase mb-4"
            style={{ 
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 100,
              letterSpacing: '0.3em',
            }}
          >
            IL ÉTAIT UNE FOIS
          </h2>

          {/* Ligne décorative avec point central */}
          <div className="flex items-center justify-center">
            <div 
              className="transition-all duration-1000"
              style={{ 
                width: isVisible ? '60px' : '0px',
                height: '1px',
                backgroundColor: DESIGN.COLORS.DIVIDER_GRAY,
              }} 
            />
            <div 
              style={{ 
                width: '8px', 
                height: '8px', 
                backgroundColor: '#000000', 
                borderRadius: '50%',
                margin: '0 16px',
                opacity: 0.2,
              }} 
            />
            <div 
              className="transition-all duration-1000"
              style={{ 
                width: isVisible ? '60px' : '0px',
                height: '1px',
                backgroundColor: DESIGN.COLORS.DIVIDER_GRAY,
              }} 
            />
          </div>
        </div>

        {/* Contenu principal - Layout amélioré */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Image portrait - Sticky sur desktop */}
          <div 
            className="lg:col-span-5 lg:sticky lg:top-32 transition-all duration-1000 delay-200"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
            }}
          >
            <div className="relative group">
              {/* Container image avec effets */}
              <div 
                className="relative overflow-hidden"
                style={{ 
                  borderRadius: DESIGN.RADIUS,
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)',
                }}
              >
                <div className="aspect-[3/4] relative">
                  <img 
                    src="/images/IMG_1007.png" 
                    alt="Faouzi Haddou"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Carte signature en bas de l'image */}
              <div 
                className="absolute -bottom-4 left-6 right-6 p-4 bg-white transform transition-all duration-500 group-hover:translate-y-[-8px]"
                style={{
                  borderRadius: DESIGN.RADIUS,
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
                }}
              >
                <p 
                  className="uppercase mb-1"
                  style={{ 
                    fontSize: '10px',
                    fontWeight: 300,
                    color: '#888888',
                    letterSpacing: '0.15em',
                  }}
                >
                  Fondateur
                </p>
                <p 
                  style={{ 
                    fontSize: '18px',
                    fontWeight: 400,
                    color: '#000000',
                    letterSpacing: '0.02em',
                  }}
                >
                  Faouzi Haddou
                </p>
                <div 
                  className="mt-2 pt-2"
                  style={{
                    borderTop: '1px solid #E5E5E5',
                  }}
                >
                  <p 
                    className="italic"
                    style={{ 
                      fontSize: '11px',
                      fontWeight: 200,
                      color: '#666666',
                      letterSpacing: '0.03em',
                    }}
                  >
                    BPJEPS Activités de la Forme
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu texte */}
          <div 
            className="lg:col-span-7 mt-8 lg:mt-0 transition-all duration-1000 delay-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
            }}
          >
            {/* En-tête de section */}
            <div className="mb-6">
              <h3 
                className="uppercase mb-2"
                style={{ 
                  fontSize: 'clamp(20px, 2.5vw, 26px)',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  color: '#000000',
                }}
              >
                FORME BODY CONCEPT
              </h3>
              <p 
                className="italic"
                style={{ 
                  fontSize: '13px',
                  fontWeight: 200,
                  color: '#888888',
                  letterSpacing: '0.05em',
                }}
              >
                Créateur de bien-être depuis 2021
              </p>
            </div>

            {/* Paragraphes avec meilleur espacement */}
            <div className="space-y-4">
              <p 
                style={{ 
                  fontSize: '15px',
                  fontWeight: 200,
                  lineHeight: '1.7',
                  color: '#2A2A2A',
                  letterSpacing: '0.01em',
                }}
              >
                Je m'appelle <strong style={{ fontWeight: 600 }}>Faouzi Haddou</strong>, un mordu de sport dès l'âge de 8 ans. J'ai commencé par le football avant de me spécialiser dans diverses disciplines. J'ai pratiqué le judo pendant plusieurs années, atteignant le niveau de 1er dan.
              </p>

              <p 
                style={{ 
                  fontSize: '15px',
                  fontWeight: 200,
                  lineHeight: '1.7',
                  color: '#2A2A2A',
                  letterSpacing: '0.01em',
                }}
              >
                Ensuite, je me suis orienté vers les sports de combat, en pratiquant le Muay Thaï (boxe thaïlandaise), le kick boxing et la boxe anglaise, que j'ai pratiquées pendant plusieurs années. Je me suis ensuite tourné vers la self-défense, le Krav Maga, puis depuis plus de 12 ans, je me passionne pour le Penchak Silat.
              </p>

              {/* Bloc highlight */}
              <div 
                className="my-6 p-5"
                style={{
                  backgroundColor: '#FAFAFA',
                  borderLeft: '3px solid #000000',
                  borderRadius: '0 8px 8px 0',
                }}
              >
                <p 
                  style={{ 
                    fontSize: '15px',
                    fontWeight: 200,
                    lineHeight: '1.7',
                    color: '#2A2A2A',
                    letterSpacing: '0.01em',
                  }}
                >
                  Tout en étant agent d'escale à l'aéroport de Roissy, où j'ai travaillé pour plusieurs compagnies aériennes telles qu'Air France, j'ai toujours continué à cultiver ma passion pour le sport. Après la crise du Covid, en 2021, j'ai décidé de transformer cette passion en métier.
                </p>
              </div>

              <p 
                style={{ 
                  fontSize: '15px',
                  fontWeight: 200,
                  lineHeight: '1.7',
                  color: '#2A2A2A',
                  letterSpacing: '0.01em',
                }}
              >
                J'ai entrepris une reconversion professionnelle, obtenant le <strong style={{ fontWeight: 600 }}>BPJEPS Activités de la Forme</strong>, avec une spécialisation en haltérophilie, musculation et cours collectifs. J'ai alors commencé à travailler avec des entreprises et des particuliers en proposant des services de coaching adaptés aux besoins spécifiques de chaque équipe.
              </p>

              <p 
                style={{ 
                  fontSize: '15px',
                  fontWeight: 200,
                  lineHeight: '1.7',
                  color: '#2A2A2A',
                  letterSpacing: '0.01em',
                }}
              >
                Fort de cette expérience, j'ai créé <strong style={{ fontWeight: 600 }}>FormBodyConcept</strong>, ma propre société, avec l'objectif de développer des programmes sur mesure pour les entreprises, afin d'améliorer le bien-être et la performance de leurs collaborateurs.
              </p>

              <p 
                style={{ 
                  fontSize: '15px',
                  fontWeight: 200,
                  lineHeight: '1.7',
                  color: '#2A2A2A',
                  letterSpacing: '0.01em',
                }}
              >
                En parallèle de ces projets, je prévois de passer un diplôme de préparateur physique en 2025-2026, afin d'approfondir encore mes connaissances et d'enrichir mon offre de services pour mieux répondre aux besoins des entreprises et des sportifs. De plus, passionné aussi de natation depuis mon enfance, je suis également entrain de passer le Bnssa, un brevet national de secourisme et de sauveteur en milieu aquatique, pour élargir mes compétences dans ce domaine.
              </p>

              {/* Citation mise en valeur */}
              <div 
                className="mt-8 mb-6 relative"
                style={{
                  paddingLeft: '30px',
                  borderLeft: '2px solid #E5E5E5',
                }}
              >
                {/* Guillemets décoratifs */}
                <div 
                  className="absolute -left-2 -top-3"
                  style={{ 
                    fontSize: '60px',
                    fontWeight: 100,
                    color: '#000000',
                    opacity: 0.08,
                    fontFamily: 'Georgia, serif',
                    lineHeight: '1',
                  }}
                >
                  "
                </div>
                
                <p 
                  className="italic relative"
                  style={{ 
                    fontSize: '15px',
                    fontWeight: 200,
                    lineHeight: '1.7',
                    color: '#333333',
                    letterSpacing: '0.01em',
                  }}
                >
                  J'ai constitué une équipe de coachs diplômés, expérimentés et spécialisés dans diverses disciplines telles que le Pilates, Yoga, Body Pump, Body Combat, RPM, CrossFit, sport de combat, self-défense et tous types de cours collectifs. Ensemble, nous proposons des solutions adaptées à chaque entreprise, pour promouvoir la santé, la cohésion et l'efficacité au travail.
                </p>

                {/* Signature */}
                <div className="mt-4 flex items-center gap-3">
                  <div 
                    style={{
                      width: '30px',
                      height: '1.5px',
                      backgroundColor: '#000000',
                    }}
                  />
                  <p 
                    style={{ 
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#000000',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Faouzi
                  </p>
                </div>
              </div>

              {/* Badges de compétences */}
              <div className="flex flex-wrap gap-2 mt-6 pt-5" style={{ borderTop: '1px solid #E5E5E5' }}>
                {[
                  'Judo 1er dan',
                  'Muay Thaï',
                  'Kick Boxing',
                  'Krav Maga',
                  'Penchak Silat',
                  'BPJEPS',
                  'Haltérophilie',
                  'Musculation',
                  'Natation'
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: '11px',
                      fontWeight: 300,
                      color: '#666666',
                      backgroundColor: '#F5F5F5',
                      borderRadius: '50px',
                      letterSpacing: '0.05em',
                      border: '1px solid #E5E5E5',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
