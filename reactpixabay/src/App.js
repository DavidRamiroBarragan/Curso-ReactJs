import React, { useState, useEffect } from 'react';
import Buscador from './components/buscador';
import ListaImagenes from './components/listaImagenes';

function App() {
  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([])
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);
  useEffect(() => {
    if (busqueda === '') return;

    const consultarApi = async () => {
      const imagenesPorPagina = 30;
      const key = '13836559-038392c7673f27a84a4d51c0c';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagenes(resultado.hits);
      // Calclular el total de paginas
      guardarTotalPaginas(Math.ceil(resultado.totalHits / imagenesPorPagina));
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({
        behavior: 'smooth',
        block: 'start'});
    };

    consultarApi();
  }, [busqueda, paginaActual]);

  const paginaAnterior = () => {
      const nuevaPaginaAnterior = paginaActual -1;
      guardarPaginaActual(nuevaPaginaAnterior)
  }
  const paginaSiguiente = () => {
    const nuevaPaginaAnterior = paginaActual + 1;
      guardarPaginaActual(nuevaPaginaAnterior)
  }
  return (
    <div className='app container'>
      <div className='jumbotron'>
        <p className='lead text-center'>Buscador de Imágenes</p>
        <Buscador guardarBusqueda={guardarBusqueda} />
      </div>
        <div className='row justify-content-center'>
          <ListaImagenes imagenes={imagenes} />
          <button onClick={paginaAnterior} className="btn btn-info mr-1">Anterior &laquo;</button>
          <button onClick={paginaSiguiente} className="btn btn-info">Siguiente &raquo;</button>
        </div>
    </div>
  );
}

export default App;
