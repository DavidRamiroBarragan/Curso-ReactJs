import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_SUCCESS,
  AGREGAR_PRODUCTO_ERROR
} from '../types';

import clienteAxios from '../config/axios';

// crear nuevo producto - Función principal

export function crearNuevoProductoAction(producto) {
  return dispatch => {
    dispatch(nuevoProducto());

    // Insertar en la Api
    clienteAxios.post('/libros', producto).then( respuesta => {
      dispatch(agregarNuevoProductoSuccess(producto));
    }).catch(error => {
      agregarNuevoProductoError();
    });
  };
}

export const nuevoProducto = () => ({
  type: AGREGAR_PRODUCTO
});

export const agregarNuevoProductoSuccess = producto => ({
  type: AGREGAR_PRODUCTO_SUCCESS,
  payload: producto
});

export const agregarNuevoProductoError = () => ({
  type: AGREGAR_PRODUCTO_ERROR,
});
