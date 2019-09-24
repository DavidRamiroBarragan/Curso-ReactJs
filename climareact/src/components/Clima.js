import React from 'react';

const Clima = ({ resultado }) => {
  const { name, main } = resultado;

  if (name) return null;

  // restar grados kelvin
  const kelvin = 273.15;

  return (
    <div className='card-panel white col s12'>
      <div className='black-text'>
        <h2>Resultado clima</h2>
      </div>
    </div>
  );
};

export default Clima;
