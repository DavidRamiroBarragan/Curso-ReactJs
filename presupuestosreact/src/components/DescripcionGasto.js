import React from 'react';

const DescripcionGasto = ({ gasto }) => (
  <li className='gastos'>
    <p>
      {gasto.nombreGasto}
      <span className='gasto'>{gasto.cantidadGasto} €</span>
    </p>
  </li>
);

export default DescripcionGasto;
