import React, { useState } from 'react';

const Formulario = ({ consultaApiLetra }) => {
  const [busqueda, agregarBusqueda] = useState({
    artista: '',
    cancion: ''
  });

  const actualizarStateBusqueda = e => {
    agregarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };

  const handleConsultaApiLetra = e => {
    e.preventDefault();
    consultaApiLetra(busqueda);
  };
  return (
    <div className='bg-info'>
      <div className='container'>
        <div className='row'>
          <form
            className='col card text-white bg-transparent  mb-5 pt-5 pb-2'
            onSubmit={handleConsultaApiLetra}
          >
            <fieldset>
              <legend className='text-center'>Buscador Letras Canciones</legend>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>Artista</label>
                    <input
                      type='text'
                      className='form-control'
                      name='artista'
                      placeholder='Nombre Artista'
                      required
                      onChange={actualizarStateBusqueda}
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>Canción</label>
                    <input
                      type='text'
                      className='form-control'
                      name='cancion'
                      placeholder='Nombre Canción'
                      required
                      onChange={actualizarStateBusqueda}
                    />
                  </div>
                </div>
              </div>
              <button type='submit' className='btn btn-primary float-right'>
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
