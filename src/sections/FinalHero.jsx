import React from 'react';
import { DESIGN } from '../config/constants';

const FinalHero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Image paysage */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-gradient-to-br from-yellow-900 via-yellow-800 to-orange-900"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Contenu centré */}
      <div className="relative z-10 text-center px-8">
        <h2 
          className="text-white uppercase mb-8"
          style={{ 
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 100,
            letterSpacing: '0.15em',
            lineHeight: '1.3',
          }}
        >
          Créez, Découvrez, Rêvez !
        </h2>
        
        <p 
          className="text-center max-w-2xl mx-auto italic"
          style={{ 
            fontSize: '14px',
            fontWeight: 200,
            color: DESIGN.COLORS.TEXT_GRAY_LIGHT,
            letterSpacing: '0.05em',
          }}
        >
          créateur de bien-être depuis 2021
        </p>
      </div>
    </section>
  );
};

export default FinalHero;

