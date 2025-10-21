import React from 'react';
import { DESIGN } from '../config/constants';

const Stakes = () => {
  const stakes = [
    { label: "Qualité de vie, productivité", value: 85 },
    { label: "Gestion du stress", value: 78 },
    { label: "Réduction de l'absentéisme", value: 72 },
    { label: "Valorisation de la communication entre les collaborateurs", value: 82 },
    { label: "Fidélisation, amélioration du climat social", value: 75 },
    { label: "Culture d'entreprise", value: 80 },
  ];

  return (
    <section 
      className="relative w-full bg-white overflow-hidden"
      style={{ paddingTop: DESIGN.SECTION_SPACING, paddingBottom: DESIGN.SECTION_SPACING }}
    >
      {/* Image de fond très subtile */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.03,
        }}
      />
      
      {/* Overlay blanc pour adoucir encore plus */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Colonne gauche - Barres de progression */}
          <div className="space-y-8">
            {stakes.map((stake, index) => (
              <div key={index}>
                <p 
                  className="text-black mb-3"
                  style={{ 
                    fontSize: '15px',
                    fontWeight: DESIGN.FONT.WEIGHT.ULTRA_LIGHT,
                    letterSpacing: '0.02em',
                  }}
                >
                  {stake.label}
                </p>
                
                {/* Barre de progression */}
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-black transition-all duration-1000 ease-out rounded-full"
                    style={{ width: `${stake.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Colonne droite - Texte */}
          <div className="space-y-6">
            <h2 
              className="text-black uppercase mb-8"
              style={{ 
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 100,
                letterSpacing: '0.3em',
              }}
            >
              QUELS ENJEUX?
            </h2>

            {/* Ligne décorative */}
            <div 
              className="w-24 mb-8"
              style={{ 
                height: '1px',
                backgroundColor: DESIGN.COLORS.DIVIDER_GRAY,
              }}
            />

            <h3 
              className="text-black mb-6"
              style={{ 
                fontSize: '20px',
                fontWeight: DESIGN.FONT.WEIGHT.LIGHT,
                fontStyle: 'italic',
              }}
            >
              Créez, découvrez, rêvez !
            </h3>

            <p 
              className="text-black italic mb-4"
              style={{ 
                fontSize: '14px',
                fontWeight: DESIGN.FONT.WEIGHT.ULTRA_LIGHT,
                color: '#888888',
              }}
            >
              créateur de bien-être depuis 2021
            </p>

            <p 
              className="text-black text-justify"
              style={{ 
                fontSize: '16px',
                fontWeight: DESIGN.FONT.WEIGHT.ULTRA_LIGHT,
                lineHeight: '1.8',
                color: '#333333',
              }}
            >
              Chez FormBodyConcept, nous croyons que le bien-être au travail n'est pas un luxe, mais une nécessité. Nos programmes sur-mesure transforment l'environnement professionnel en un espace d'épanouissement où chaque collaborateur peut s'épanouir et donner le meilleur de lui-même.
            </p>

            <p 
              className="text-black text-justify"
              style={{ 
                fontSize: '16px',
                fontWeight: DESIGN.FONT.WEIGHT.ULTRA_LIGHT,
                lineHeight: '1.8',
                color: '#333333',
              }}
            >
              Nous accompagnons les entreprises dans leur démarche RSE en créant des solutions adaptées à leurs enjeux spécifiques. Notre approche holistique intègre le corps et l'esprit pour développer la cohésion d'équipe, réduire le stress et améliorer durablement la performance collective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stakes;

