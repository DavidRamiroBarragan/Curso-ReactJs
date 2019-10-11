import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { borrarCitaAction } from '../actions/citas.actions';

const ListadoCitas = () => {
  const citas = useSelector(state => state.citas);
  const dispatch = useDispatch();
  const borrarCita = id => dispatch(borrarCitaAction(id));

  return (
    <div className='card mt-5'>
      <div className='card-body'>
        <h2 className='card-title text-center'>Administra citas</h2>
        <div className='lista-citas'>
          {citas.citas
        .map(cita => {
            return (
              <div key={cita.id} className='media mt-3'>
                <div className='media-body'>
                  <h3 className='mt-0'>{cita.mascota}</h3>
                  <p className='card-text'>
                    <span>Nombre Dueño:</span> {cita.propietario}
                  </p>
                  <p className='card-text'>
                    <span>Fecha:</span> {cita.fecha}
                  </p>
                  <p className='card-text'>
                    <span>Hora:</span>
                    {cita.hora}
                  </p>
                  <p className='card-text'>
                    <span>Sintomas:</span> <br />
                    {cita.sintomas}
                  </p>
                  <button
                    className='btn btn-danger'
                    onClick={() => borrarCita(cita.id)}
                  >
                    Borrar &times;
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListadoCitas;
