import React, { useState } from 'react';

const Formulario = ({datosConsulta}) => {
  const [busqueda, setBusqueda] = useState({
      ciudad: '',
      pais: '',
  });

    const consultarDatos = (e) => {
        e.preventDefault();
        datosConsulta(busqueda)
    };

  const handleChange = e => {
    // Cambiar el state
    setBusqueda({
        ...busqueda,
        [e.target.name]  : e.target.value
    });
  };

  return (
    <form onSubmit={consultarDatos}>
      <div className='input-field col s12'>
        <input type='text' name='ciudad' id='ciudad' onChange={handleChange} />
        <label htmlFor='ciudad'>Ciudad: </label>
      </div>
      <div className='input-field col s12'>
        <select onChange={handleChange} name='pais' id='pais'>
          <option value=''>-- Selecciona un pais --</option>
          <option value='US'>Estados Unidos</option>
          <option value='ES'>España</option>
          <option value='UK'>Reino Unido</option>
        </select>
        <label htmlFor='pais'>Pais: </label>
      </div>
      <div className='input-field col s12'>
        <input
          type='submit'
          value='Enviar'
          className='waves-effect waves-light btn-large btn-block yellow accent-4'
        />
      </div>
    </form>
  );
};

export default Formulario;
