import React from 'react';

const ComponentB: React.FC = () => {
  console.log('componente B');
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
      <h3 style={{ marginTop: '5px' }}>Bulma</h3>
      <img
        src="https://dragonball-api.com/characters/bulma.webp"
        alt="Dragon Ball Z Poster"
        loading="lazy"
        style={{ maxWidth: '100%', height: `calc(100% - 42px)`, borderRadius: '10px' }} // Ajustar imagen al 100% del ancho disponible
      />
    </div>
  );
};

export default ComponentB;