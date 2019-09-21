import React from 'react';
import CitaComponent from './CitaComponent';

const ListaCitas = ({ citas, eliminarCita }) => {
  
  const mensaje = Object.keys(citas).length === 0 ? 'Añadir citas' : 'Administra las citas';
  return (
    <div className='card mt-2 py-5'>
      <div className='card-body'>
        <h2 className='card-title text-center'>{mensaje}</h2>
        <div className='lista-citas'>
          {citas.map(cita => (
            <CitaComponent
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaCitas;
