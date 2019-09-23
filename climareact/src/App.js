import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';

function App() {
  const [ciudad, setCiudad] = useState('');
  const [pais, setPais] = useState('');
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState({});

  useEffect(()=>{
    const consultarApi = async () => {
      // 75efbc7781f820991476ea28f52dace2
      const url = `https://openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=75efbc7781f820991476ea28f52dace2`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setResultado(resultado);
    };
    
    //prevenir ejecucion
    if(ciudad === ''){
      return;
    }
    consultarApi();
  }, [ciudad, pais]);

  const datosConsulta = datos => {
    const { ciudad, pais } = datos;
    if (ciudad === '' || pais === '') {
      //Añadir error
      setError(true);
      return;
    }
    setError(false);
    setCiudad(ciudad);
    setPais(pais);
  };

  let componente = null;
  if (error) {
    componente = <Error mensaje='Ambos campos son obligatorios' />;
  } else {
    //mostrar el clima
  }
  return (
    <div className='App'>
      <Header titulo='Clima React App' />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col s12 m6'>
              <Formulario datosConsulta={datosConsulta} />
            </div>
            <div className='col s12 m6'>{componente}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
