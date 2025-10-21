import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Création et aménagement d'espaces",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    },
    {
      title: "Gestion et exploitation",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    },
    {
      title: "Les programmes Body & Mind",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    },
    {
      title: "Les services à distance",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    },
    {
      title: "Événementiel et Team Building",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
    },
  ];

  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{ 
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Bande noire verticale à gauche */}
      <div 
        className="absolute left-0 top-0 bottom-0"
        style={{
          width: '16%',
          background: 'linear-gradient(180deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        }}
      />

      {/* Zone principale blanche/gris très clair */}
      <div 
        className="absolute top-0 bottom-0"
        style={{
          left: '16%',
          right: 0,
          background: 'linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 50%, #F5F5F5 100%)',
        }}
      />

      {/* Contenu */}
      <div className="relative z-10" style={{ paddingTop: '80px', paddingBottom: '140px' }}>
        {/* Titre principal épuré */}
        <div className="text-center mb-20">
          <h2 
            className="text-black uppercase mb-3"
            style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 100,
              letterSpacing: '0.35em',
            }}
          >
            NOS SERVICES
          </h2>
          
          <p 
            className="uppercase"
            style={{ 
              fontSize: '13px',
              fontWeight: 200,
              color: '#888888',
              letterSpacing: '0.15em',
            }}
          >
            FORME BODY CONCEPT
          </p>
        </div>

        {/* Conteneur principal */}
        <div className="max-w-7xl mx-auto px-12">
          {/* Grid des services - 2 lignes x 3 colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Les 5 cartes de services */}
            {services.map((service, index) => (
              <div 
                key={index}
                className="relative overflow-hidden"
                style={{ 
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                  height: '420px',
                }}
              >
                {/* Image de fond */}
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center' }}
                />
                
                {/* Overlay gradient léger */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.4) 100%)',
                  }}
                />

                {/* Bouton avec le titre */}
                <div 
                  className="absolute left-0 right-0"
                  style={{ bottom: '28px', paddingLeft: '28px', paddingRight: '28px' }}
                >
                  <button 
                    className="w-full text-white text-center transition-all duration-300 hover:scale-105 hover:bg-gray-800"
                    style={{ 
                      backgroundColor: '#000000',
                      borderRadius: '50px',
                      fontSize: '15px',
                      fontWeight: 400,
                      letterSpacing: '0.01em',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                      paddingTop: '16px',
                      paddingBottom: '16px',
                      paddingLeft: '24px',
                      paddingRight: '24px',
                    }}
                  >
                    {service.title}
                  </button>
                </div>
              </div>
            ))}

            {/* Logo - 6ème élément de la grille */}
            <div 
              className="relative overflow-hidden hidden lg:flex items-center justify-center"
              style={{ 
                borderRadius: '20px',
                backgroundColor: 'rgba(250, 250, 250, 0.8)',
                height: '420px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
              }}
            >
              <div 
                className="rounded-full flex items-center justify-center"
                style={{
                  width: '280px',
                  height: '280px',
                  background: 'linear-gradient(135deg, #000000 0%, #2a2a2a 100%)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                }}
              >
                {/* Utilisation du logo du projet */}
                <img 
                  src="/images/Logo.png" 
                  alt="Forme Body Concept" 
                  className="object-contain"
                  style={{ 
                    width: '200px',
                    height: '200px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formes décoratives en bas - nuages stylisés noirs */}
      <div 
        className="absolute left-0 right-0 overflow-hidden z-20" 
        style={{ bottom: 0, height: '140px' }}
      >
        <svg 
          viewBox="0 0 1440 140" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Première couche de nuages */}
          <path
            d="M0,70 Q30,50 60,70 Q90,90 120,70 Q150,50 180,70 Q210,90 240,70 Q270,50 300,70 Q330,90 360,70 Q390,50 420,70 Q450,90 480,70 Q510,50 540,70 Q570,90 600,70 Q630,50 660,70 Q690,90 720,70 Q750,50 780,70 Q810,90 840,70 Q870,50 900,70 Q930,90 960,70 Q990,50 1020,70 Q1050,90 1080,70 Q1110,50 1140,70 Q1170,90 1200,70 Q1230,50 1260,70 Q1290,90 1320,70 Q1350,50 1380,70 Q1410,90 1440,70 L1440,140 L0,140 Z"
            fill="#2a2a2a"
            opacity="0.5"
          />
          {/* Deuxième couche */}
          <path
            d="M0,85 Q40,65 80,85 Q120,105 160,85 Q200,65 240,85 Q280,105 320,85 Q360,65 400,85 Q440,105 480,85 Q520,65 560,85 Q600,105 640,85 Q680,65 720,85 Q760,105 800,85 Q840,65 880,85 Q920,105 960,85 Q1000,65 1040,85 Q1080,105 1120,85 Q1160,65 1200,85 Q1240,105 1280,85 Q1320,65 1360,85 Q1400,105 1440,85 L1440,140 L0,140 Z"
            fill="#1a1a1a"
            opacity="0.7"
          />
          {/* Troisième couche */}
          <path
            d="M0,100 Q50,85 100,100 Q150,115 200,100 Q250,85 300,100 Q350,115 400,100 Q450,85 500,100 Q550,115 600,100 Q650,85 700,100 Q750,115 800,100 Q850,85 900,100 Q950,115 1000,100 Q1050,85 1100,100 Q1150,115 1200,100 Q1250,85 1300,100 Q1350,115 1400,100 Q1425,107 1440,100 L1440,140 L0,140 Z"
            fill="#000000"
            opacity="0.9"
          />
        </svg>
      </div>
    </section>
  );
};

export default Services;
