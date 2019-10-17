import React, { useState } from 'react';
import { crearNuevoProductoAction } from '../actions/productos.actions';
import {
  validarFormularioAction,
  validacionExito,
  validacionError
} from '../actions/validation.actions';
import { useDispatch, useSelector } from 'react-redux';
import ErrorFormulario from './ErrorFormulario';

const NuevoProducto = ({ history }) => {
  const [nombre, guardarNombre] = useState('');
  const [precio, guardarPrecio] = useState('');

  const dispatch = useDispatch();
  const agregarProducto = producto =>
    dispatch(crearNuevoProductoAction(producto));
  const validarFormulario = () => dispatch(validarFormularioAction());
  const exitoValidacion = () => dispatch(validacionExito());
  const errorValidacion = () => dispatch(validacionError());

  // Obtener los datos del state de Redux

  const error = useSelector(({ error: { error } }) => error);

  const submitNuevoProducto = e => {
    e.preventDefault();
    validarFormulario();
    // Vallidar el producto
    if (nombre.trim() === '' || precio.trim() === '') {
      errorValidacion();
      return;
    }
    // Si pasa la validación
    exitoValidacion();

    // Crear nuevo producto
    agregarProducto({ nombre, precio });

    // Redireccionar
    history.push('/');
  };

  return (
    <div className='row justify-content-center mt-5'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold '>
              Agregar Nuevo Libro
            </h2>
            <form onSubmit={submitNuevoProducto}>
              <div className='form-group'>
                <label>Nombre Libro</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre Libro'
                  value={nombre}
                  onChange={e => guardarNombre(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label>Precio Libro</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Precio Libro'
                  value={precio}
                  onChange={e => guardarPrecio(e.target.value)}
                />
              </div>

              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Agregar
              </button>
            </form>
            {error && (
              <ErrorFormulario mensaje={'Todos los campos son obligatorios'} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
