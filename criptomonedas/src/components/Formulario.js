import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Criptomonedas from './Criptomonedas';
import Error from './Error';

export default function Formulario({ setModeneda, setCriptoModeneda }) {
  const [criptomonedas, guardarCriptomonedas] = useState([]);
  const [monedaACotizar, setMonedaACotizar] = useState('');
  const [criptoCotizar, setCriptoCotizar] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

      const resultado = await axios.get(url);
      guardarCriptomonedas(resultado.data.Data);
    };

    consultarApi();
  }, []);

  const cotizarMoneda = e => {
    e.preventDefault();

    if (monedaACotizar === '' || criptoCotizar === '') {
      setError(true);
      return;
    }
    setError(false);
    setModeneda(monedaACotizar);
    setCriptoModeneda(criptoCotizar);
  };

  const componente = error ? (
    <Error mensaje='Ambos campos son obligatorios' />
  ) : null;

  return (
    <form onSubmit={cotizarMoneda}>
      {componente}
      <div className='row'>
        <label htmlFor=''>Elige tu Moneda</label>
        <select
          name=''
          id=''
          className='u-full-width'
          onChange={e => setMonedaACotizar(e.target.value)}
        >
          <option value=''>-- Elige tu moneda --</option>
          <option value='USD'>Dolar EEUU</option>
          <option value='EUR'>Euros</option>
        </select>
      </div>
      <div className='row'>
        <label htmlFor=''>Elige tu Criptomoneda</label>
        <select
          name=''
          id=''
          className='u-full-width'
          onChange={e => setCriptoCotizar(e.target.value)}
        >
          <option value=''>-- Elige tu criptomoneda --</option>
          {criptomonedas.map(cripto => (
            <Criptomonedas key={cripto.CoinInfo.Id} criptomoneda={cripto} />
          ))}
        </select>
      </div>
      <input
        type='submit'
        value='Cotizar'
        className='button-primary u-full-width'
      />
    </form>
  );
}
