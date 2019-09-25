import React, { useState } from 'react';
import Error from './Error';

const Formulario = () => {
  const [nombreGasto, setNombreGasto] = useState('');
  const [cantidadGasto, setCantidadGasto] = useState(0);
  const [error, setError] = useState(false);
  const agregarGasto = e => {
    e.preventDefault();

    if (cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === '') {
      setError(true);
      return;
    }

    setError(false);
  };
  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>
      {error && <Error mensaje='Ambos campos son obligatorios' />}
      <div className='campo'>
        <label htmlFor=''>Nombre gasto</label>
        <input
          type='text'
          name=''
          id=''
          className='u-full-width'
          placeholder='Ej. Transporte'
          onChange={e => setNombreGasto(e.target.value)}
        />
      </div>
      <div className='campo'>
        <label htmlFor=''>Cantidad gasto</label>
        <input
          type='number'
          name=''
          id=''
          className='u-full-width'
          placeholder='Ej. 300'
          onChange={e => setCantidadGasto(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type='submit'
        className='button-primary u-full-width'
        value='Agregar Gasto'
      />
    </form>
  );
};

export default Formulario;
