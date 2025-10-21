import React from 'react';
import { DESIGN } from '../config/constants';

const RunnerImage = () => {
  return (
    <section 
      className="relative w-full bg-white"
      style={{ paddingTop: DESIGN.SECTION_SPACING_TOP, paddingBottom: DESIGN.SECTION_SPACING_TOP }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div 
          className="w-full h-96 bg-gray-300 overflow-hidden"
          style={{ 
            borderRadius: DESIGN.RADIUS,
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
          }}
        >
          <img 
            src="/images/homme-en-tenue-de-sport-en-cours-d-execution-sur-route.jpg" 
            alt="Coureur"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default RunnerImage;

