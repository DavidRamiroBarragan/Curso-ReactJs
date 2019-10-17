import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  obtenerEditarProductoAction,
  editarProductoAction
} from '../actions/productos.actions';
import ErrorFormulario from './ErrorFormulario';
import {
  validarFormularioAction,
  validacionExito,
  validacionError
} from '../actions/validation.actions';
import Swal from 'sweetalert2';

const EditarProducto = ({
  match: {
    params: { id }
  },
  history
}) => {
  const nombreRef = useRef('');
  const precioRef = useRef('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(obtenerEditarProductoAction(id));
  }, [dispatch, id]);
  const guardarProductoEditado = producto =>
    dispatch(editarProductoAction(producto));
  const validarFormulario = () => dispatch(validarFormularioAction());
  const exitoValidacion = () => dispatch(validacionExito());
  const errorValidacion = () => dispatch(validacionError());

  const { nombre, precio } = useSelector(state => {
    return state.productos.producto;
  });

  const error = useSelector(({ error: { error } }) => error);

  const editarProducto = e => {
    e.preventDefault();

    validarFormulario();
    // Vallidar el producto
    if (
      nombreRef.current.value.trim() === '' ||
      precioRef.current.value.trim() === ''
    ) {
      errorValidacion();
      return;
    }

    exitoValidacion();

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, edit it!'
    }).then(result => {
      if (result.value) {
        Swal.fire('Editado!', 'Your file has been editado.', 'success');
      }
      guardarProductoEditado({
        id,
        nombre: nombreRef.current.value,
        precio: precioRef.current.value
      });

      history.push('/');
    });
    // Si pasa la validación
  };

  return (
    <>
      {nombre === undefined || (precio === undefined && 'Cargando...')}
      {error && (
        <ErrorFormulario mensaje={'Hubo un error intentalo de nuevo'} />
      )}
      <div className='row justify-content-center mt-5'>
        <div className='col-md-8'>
          <div className='card'>
            <div className='card-body'>
              <h2 className='text-center'>Editar Producto</h2>
              <form onSubmit={e => editarProducto(e)}>
                <div className='form-group'>
                  <label>Titulo</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Titulo'
                    defaultValue={nombre}
                    ref={nombreRef}
                  />
                </div>
                <div className='form-group'>
                  <label>Precio del Producto</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Precio'
                    defaultValue={precio}
                    ref={precioRef}
                  />
                </div>

                <button
                  type='submit'
                  className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                >
                  Guardar Cambios
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditarProducto;
