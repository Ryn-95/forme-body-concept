import React from 'react';

const Logo = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
  };

  return (
    <div 
      className={`${sizes[size]} rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden ${className}`}
      style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
    >
      <img 
        src="/images/Logo.png" 
        alt="Forme Body Concept" 
        className="w-full h-full object-contain p-2"
      />
    </div>
  );
};

export default Logo;

