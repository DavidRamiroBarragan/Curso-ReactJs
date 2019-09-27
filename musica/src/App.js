import React, { useState, useEffect, useCallback } from 'react';
import Formulario from './Components/Formulario';
import axios from 'axios';
import Cancion from './Components/Cancion';
import Informacion from './Components/Informacion';

function App() {
  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  const consultaApiLetra = ({ artista, cancion }) => {
    const endPoint = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    axios(endPoint)
      .then(response => {
        agregarArtista(artista);
        agregarLetra(response.data.lyrics);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const consultarApiInfoArtista = useCallback(() => {
    const endPoint = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
    if (artista) {
      axios
        .get(endPoint)
        .then(response => {
          agregarInfo(response.data.artists[0]);
        })
        .catch(e => console.log);
    }
  }, [artista]);

  useEffect(() => {
    consultarApiInfoArtista();
  }, [artista, consultarApiInfoArtista]);

  return (
    <>
      <Formulario consultaApiLetra={consultaApiLetra} />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <Informacion info={info} />
          </div>
          <div className='col-md-6'>
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
