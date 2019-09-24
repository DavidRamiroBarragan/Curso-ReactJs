import React, { useState } from 'react';

function Formulario({ agregarCitasState }) {
  const initialState = {
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  };
  const [cita, setCita] = useState(initialState);

  const actualizarOnChange = e => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const enviarCita = e => {
    e.preventDefault();
    agregarCitasState(cita);
    setCita(initialState);
  };
  return (
    <>
      <h2>Crear Cita</h2>

      <form onSubmit={enviarCita}>
        <label>Nombre Mascota</label>
        <input
          type='text'
          name='mascota'
          className='u-full-width'
          placeholder='Nombre Mascota'
          onChange={actualizarOnChange}
          value={cita.mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type='text'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre Dueño de la Mascota'
          onChange={actualizarOnChange}
          value={cita.propietario}
        />

        <label>Fecha</label>
        <input
          type='date'
          className='u-full-width'
          name='fecha'
          onChange={actualizarOnChange}
          value={cita.fecha}
        />

        <label>Hora</label>
        <input
          type='time'
          className='u-full-width'
          name='hora'
          onChange={actualizarOnChange}
          value={cita.hora}
        />

        <label>Sintomas</label>
        <textarea
          className='u-full-width'
          name='sintomas'
          onChange={actualizarOnChange}
          value={cita.sintomas}
        ></textarea>

        <button type='submit' className='button-primary u-full-width'>
          Agregar
        </button>
      </form>
    </>
  );
}

function Cita({ cita, index, eliminarCita }) {
  const eliminarCitas = ind => {
    eliminarCita(index);
  };
  return (
    <div className='cita'>
      <p>
        Mascota: <span>{cita.mascota}</span>
      </p>
      <p>
        Propietario: <span>{cita.propietario}</span>
      </p>
      <p>
        Fecha: <span>{cita.fecha}</span>
      </p>
      <p>
        Hora: <span>{cita.hora}</span>
      </p>
      <p>
        Sintomas: <span>{cita.sintomas}</span>
      </p>
      <button
        className='button eliminar u-full-width'
        onClick={() => eliminarCitas(index)}
      >
        Eliminar
      </button>
    </div>
  );
}

function App() {
  const [state, setState] = useState([]);
  console.log('state', state);

  const agregarCitasState = cita => {
    const nuevasCitas = [...state, cita];
    setState(nuevasCitas);
  };

  const eliminarCita = index => {
    const nuevasCitas = [...state];
    nuevasCitas.splice(index, 1);
    setState(nuevasCitas);
  };

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario agregarCitasState={agregarCitasState} />
          </div>
          <div className='one-half column'>
            {state.map((cita, index) => {
              return (
                <Cita
                  key={index}
                  index={index}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
