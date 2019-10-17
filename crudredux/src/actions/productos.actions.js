import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_SUCCESS,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  COMENZAR_DESCARGA_PRODUCTOS_SUCCESS,
  COMENZAR_DESCARGA_PRODUCTOS_ERROR,
  ELIMINAR_PRODUCTO,
  ELIMINAR_PRODUCTO_SUCCESS,
  ELIMINAR_PRODUCTO_ERROR,
  OBTENER_EDITAR_PRODUCTO,
  OBTENER_EDITAR_PRODUCTO_SUCCESS,
  OBTENER_EDITAR_PRODUCTO_ERROR,
  EDITAR_PRODUCTO,
  EDITAR_PRODUCTO_SUCCESS,
  EDITAR_PRODUCTO_ERROR
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

export function eliminarProductoAction(id) {
  return dispatch => {
    dispatch(eliminarProducto());

    clienteAxios
      .delete(`/libros/${id}`)
      .then(() => {
        dispatch(eliminarProductoSuccess(id));
      })
      .catch(() => {
        dispatch(eliminarProductoError());
      });
  };
}

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

export function obtenerEditarProductoAction(id) {
  return dispatch => {
    dispatch(obtenerEditarditarProducto());

    clienteAxios
      .get(`/libros/${id}`)
      .then(({ data }) => {
        dispatch(obtenerEditarditarProductoSuccess(data));
      })
      .catch(error => obtenerEditarditarProductoError());
  };
}

export const obtenerEditarditarProducto = () => ({
  type: OBTENER_EDITAR_PRODUCTO
});
export const obtenerEditarditarProductoSuccess = producto => ({
  type: OBTENER_EDITAR_PRODUCTO_SUCCESS,
  payload: producto
});

export const obtenerEditarditarProductoError = () => ({
  type: OBTENER_EDITAR_PRODUCTO_ERROR
});

export function editarProductoAction(producto) {
  return dispatch => {
    dispatch(editarProducto());
    clienteAxios
      .patch(`/libros/${producto.id}`, producto)
      .then(({ data }) => dispatch(editarProductoSuccess(data)))
      .catch(_ => dispatch(editarProductoError()));
  };
}

export const editarProducto = () => ({
  type: EDITAR_PRODUCTO
});
export const editarProductoSuccess = producto => ({
  type: EDITAR_PRODUCTO_SUCCESS,
  payload: producto
});

export const editarProductoError = () => ({
  type: EDITAR_PRODUCTO_ERROR
});
