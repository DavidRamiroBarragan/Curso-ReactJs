import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Frase from './components/Frase';

function App() {
  const [frase, obtenerFrase] = useState({});

  async function getFrase() {
    const resultado = await axios(
      'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
    );

    if (resultado) {
      obtenerFrase(resultado.data[0]);
    }
  }

  useEffect(() => {
    getFrase();
  }, []);
  return (
    <div className='contenedor'>
      <Frase frase={frase} />
      <button onClick={getFrase}>Generar frase</button>
    </div>
  );
}

export default App;
