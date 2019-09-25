import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [preguntaPresupuesto, setPreguntaPresupuesto] = useState(true);
  return (
    <div className='App container'>
      <header>
        <h1>Gasto semanal</h1>
      </header>
      <div className='contenido-principal contenido'>
        {preguntaPresupuesto ? (
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            setPreguntaPresupuesto={setPreguntaPresupuesto}
          />
        ) : (
          <div className='row'>
            <div className='one-half column'>
              <Formulario />
            </div>
            <div className='one-half column'>gastos</div>
            {}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
