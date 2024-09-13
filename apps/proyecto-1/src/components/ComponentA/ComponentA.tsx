import React from 'react';

const ComponentA: React.FC = () => {
  console.log('componente A');
  return (
    <div 
      style={{ 
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        width: '100%', 
        height: '100%',
      }}
    >
      <h3 style={{ marginTop: '5px' }}>Bardock</h3>
      <img
        src="https://dragonball-api.com/characters/Bardock_Artwork.webp"
        alt="Dragon Ball Z Poster"
        loading="lazy" // lazy loading para mejorar el rendimiento propuesto
        style={{ maxWidth: '100%', height: `calc(100% - 42px)`, borderRadius: '10px' }} 
      />
    </div>
  );
};

export default ComponentA;