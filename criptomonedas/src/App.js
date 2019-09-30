import React, { useState, useEffect } from 'react';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import axios from 'axios';
import Spinner from './components/Spinner';
import Resultado from './components/Resultado';

function App() {
  const [moneda, setMoneda] = useState('');
  const [criptoMoneda, setCriptoModeneda] = useState('');
  const [cargando, setCargando] = useState(false);
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    const cotizarCriptoMoneda = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
      // https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR

      if (moneda === '') return;
      const resultado = await axios.get(url);

      setCargando(true);

      setTimeout(() => {
        setCargando(false);
        setResultado(resultado.data.DISPLAY[criptoMoneda][moneda]);
      }, 2000);
    };

    cotizarCriptoMoneda();
  }, [moneda, criptoMoneda]);

  const componente = cargando ? (
    <Spinner />
  ) : (
    <Resultado resultado={resultado} />
  );

  return (
    <div className='container'>
      <div className='row'>
        <div className='one-half column'>
          <img src={imagen} alt='logotipo' className='logotipo' />
        </div>
        <div className='one-half column'>
          <h1>Cotiza criptomonedas</h1>
          <Formulario
            setModeneda={setMoneda}
            setCriptoModeneda={setCriptoModeneda}
          />
          {componente}
        </div>
      </div>
    </div>
  );
}

export default App;
