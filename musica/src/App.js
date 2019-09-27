import React, { useState, useEffect } from 'react';
import Formulario from './Components/Formulario';
import axios from 'axios';
import Cancion from './Components/Cancion';

function App() {
  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  const consultaApiLetra = busqueda => {
    const endPoint = `https://api.lyrics.ovh/v1/${busqueda.artista}/${busqueda.cancion}`;
    axios(endPoint)
      .then(response => {
        agregarLetra(response.data.lyrics);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <>
      <Formulario consultaApiLetra={consultaApiLetra} />
      <div className='container mt-5'>
        <div className='col-md-6'></div>
        <div className='col-md-6'>
          <Cancion letra={letra} />
        </div>
      </div>
    </>
  );
}

export default App;
