import React, {useCallback} from 'react';
import { Link } from 'react-router-dom';

export default function ProductoLista({ producto }) {
  const eliminarProducto = useCallback(
    (id) => {
      // TODO Eliminar los registros
      console.log({id})
    },
    [],
  );
  return (
    <li
      data-categoria={producto.categoria}
      className='list-group-item d-flex justify-content-between align-item-center'
    >
      <p>
        {producto.nombrePlatillo}
        <span className='font-weight-bold ml-4'>
          ${producto.precioPlatillo}
        </span>
      </p>
      <div>
        <Link to={`/productos/editar/${producto.id}`} className="btn btn-success mr-2">Editar</Link>
        <button className="btn btn-danger" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
      </div>
    </li>
  );
}
