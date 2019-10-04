import React, { useState, useEffect } from 'react';
import Buscador from './components/buscador';

function App() {
  const [busqueda, guardarBusqueda] = useState('');

  useEffect(() => {
    if (busqueda === '') return;

    const consultarApi = async () => {
      const imagenesPorPagina = 30;
      const key = '13836559-038392c7673f27a84a4d51c0c';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado);
    };

    consultarApi();
  }, [busqueda]);
  return (
    <div className='app container'>
      <div className='jumbotron'>
        <p className='lead text-center'>Buscador de Imágenes</p>
        <Buscador guardarBusqueda={guardarBusqueda} />
        <div className='row justify-content-center'></div>
      </div>
    </div>
  );
}

export default App;
