import React from 'react';
import { Link } from 'react-router-dom';
import { eliminarProductoAction } from '../actions/productos.actions';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const Producto = ({ producto }) => {
  const dispatch = useDispatch();

  const eliminarProducto = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
      dispatch(eliminarProductoAction(id));
    });
  };

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio} €</td>
      <td className='acciones'>
        <Link
          to={`/producto/editar/${producto.id}`}
          className='btn btn-primary mr-2'
        >
          Editar
        </Link>
        <button
          className='btn btn-danger'
          onClick={() => eliminarProducto(producto.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
