import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_SUCCESS,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  COMENZAR_DESCARGA_PRODUCTOS_SUCCESS,
  COMENZAR_DESCARGA_PRODUCTOS_ERROR,
  ELIMINAR_PRODUCTO,
  ELIMINAR_PRODUCTO_SUCCESS,
  ELIMINAR_PRODUCTO_ERROR
} from '../types';

import clienteAxios from '../config/axios';

// crear nuevo producto - Función principal

export function crearNuevoProductoAction(producto) {
  return dispatch => {
    dispatch(nuevoProducto());

    // Insertar en la Api
    clienteAxios
      .post('/libros', producto)
      .then(respuesta => {
        dispatch(agregarNuevoProductoSuccess(producto));
      })
      .catch(error => {
        agregarNuevoProductoError();
      });
  };
}

export function comenzarDescargaProductosAction() {
  return dispatch => {
    dispatch(descargarProductos());

    clienteAxios
      .get('/libros')
      .then(({ data }) => {
        dispatch(descargaProductosSuccess(data));
      })
      .catch(() => {
        dispatch(descargarProductosError());
      });
  };
}

export function eliminarProductoAction(id) {
  return dispatch => {
    dispatch(eliminarProducto());

    clienteAxios
      .delete('/libros', id)
      .then(({ data }) => {
        dispatch(eliminarProductoSuccess(id));
      })
      .catch(() => {
        dispatch(eliminarProductoError());
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
  type: AGREGAR_PRODUCTO_ERROR
});

export const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS
});

export const descargaProductosSuccess = productos => ({
  type: COMENZAR_DESCARGA_PRODUCTOS_SUCCESS,
  payload: productos
});

export const descargarProductosError = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS_ERROR
});

export const eliminarProducto = () => ({
  type: ELIMINAR_PRODUCTO
});
export const eliminarProductoSuccess = id => ({
  type: ELIMINAR_PRODUCTO_SUCCESS,
  payload: id
});

export const eliminarProductoError = () => ({
  type: ELIMINAR_PRODUCTO_ERROR
});
