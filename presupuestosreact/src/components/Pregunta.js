import React, { useState } from 'react';
import Error from './Error';

export default function Pregunta({
  guardarPresupuesto,
  setPreguntaPresupuesto,
  guardarRestante
}) {
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardadError] = useState(false);

  const agregarPresupuesto = e => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad)) {
      guardadError(true);
      return;
    }
    guardadError(false);
    guardarRestante(cantidad);
    guardarPresupuesto(cantidad);
    setPreguntaPresupuesto(false);
  };
  return (
    <div className='App container'>
      <h2>Coloca tu presupuesto</h2>

      {error && <Error mensaje='Erro en el presupuesto' />}
      <form onSubmit={agregarPresupuesto}>
        <input
          type='number'
          name=''
          id=''
          className='u-full-width'
          placeholder='Agrega tu presupuesto'
          onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
        <input
          type='submit'
          value=''
          className='u-full-width button-primary'
          value='Definir presupuesto'
        />
      </form>
    </div>
  );
}
