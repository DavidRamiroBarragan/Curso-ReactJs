import React, { useState } from 'react';
import Error from './error';

export default function Buscador({ guardarBusqueda }) {
  const [termino, guardarTermino] = useState('');
  const [error, guardarError] = useState(false);
  const buscarImagen = e => {
    e.preventDefault();
    if (termino === '') {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarBusqueda(termino);
  };

  const guardarTerminodeBusqueda = e => {
    guardarTermino(e.target.value);
  };

  return (
    <form onSubmit={buscarImagen}>
      <div className='row'>
        <div className='form-group col-md-8'>
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Buscar imagen'
            onChange={e => guardarTerminodeBusqueda(e)}
          />
        </div>
        <div className='form-group col-md-4'>
          <input
            type='submit'
            className='btn btn-lg btn-danger btn-block'
            value='Buscador'
          />
        </div>
      </div>
      {error && <Error mensaje='Agrega un termino de busqueda' />}
    </form>
  );
}
