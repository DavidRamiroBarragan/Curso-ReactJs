import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(presupuesto);
  const [preguntaPresupuesto, setPreguntaPresupuesto] = useState(true);
  const [gasto, guardarGasto] = useState({});
  const [gastos, setGastos] = useState([]);
  const [crearGasto, setCrearGasto] = useState(false);

  useEffect(() => {
    if (crearGasto) {
      const nuevosGastos = [...gastos, gasto];
      setGastos(nuevosGastos);
      setCrearGasto(false);
      const presupuestoRestante = restante - gasto.cantidadGasto;
      guardarRestante(presupuestoRestante);
    }
  }, [crearGasto]);

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
            guardarRestante={guardarRestante}
          />
        ) : (
          <div className='row'>
            <div className='one-half column'>
              <Formulario
                guardarGasto={guardarGasto}
                setCrearGasto={setCrearGasto}
              />
            </div>
            <div className='one-half column'>
              <Listado gastos={gastos} />
              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
