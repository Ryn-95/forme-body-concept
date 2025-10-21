import React from 'react';
import { DESIGN } from '../config/constants';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
    },
    {
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    },
    {
      url: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800",
    },
    {
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
    },
  ];

  return (
    <section 
      className="relative w-full bg-white"
      style={{ paddingTop: DESIGN.SECTION_SPACING, paddingBottom: DESIGN.SECTION_SPACING }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Titre */}
        <h2 
          className="text-black uppercase text-center mb-20"
          style={{ 
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 100,
            letterSpacing: '0.25em',
          }}
        >
          NOS COURS EN IMAGES
        </h2>

        {/* Grid d'images CARRÉES - Layout asymétrique comme sur la capture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Première ligne : 1 petite + 1 grande horizontale (2 colonnes) */}
          <div 
            className="relative overflow-hidden group aspect-square"
            style={{ 
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img 
              src={images[0].url}
              alt="Cours collectifs"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
          </div>

          {/* Grande image qui prend 2 colonnes mais reste CARRÉE */}
          <div 
            className="relative overflow-hidden group md:col-span-2 aspect-square"
            style={{ 
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img 
              src={images[1].url}
              alt="Yoga sunset"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
          </div>

          {/* Deuxième ligne : 3 images CARRÉES égales */}
          {images.slice(2, 5).map((image, index) => (
            <div 
              key={index + 2}
              className="relative overflow-hidden group aspect-square"
              style={{ 
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              }}
            >
              <img 
                src={image.url}
                alt={`Cours ${index + 3}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

