import React from 'react';
import DescripcionGasto from './DescripcionGasto';

const Listado = ({ gastos }) => {
  return (
    <div className='gastos-realizados'>
      <h2>Gastos realizados</h2>
      <ul>
        {gastos.map(gasto => (
          <DescripcionGasto key={gasto.id} gasto={gasto} />
        ))}
      </ul>
    </div>
  );
};

export default Listado;
