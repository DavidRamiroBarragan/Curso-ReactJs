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

//Cada reducer tiene su propio state

const initialState = {
  productos: [],
  error: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        error: null,
        loading: true
      };
    case AGREGAR_PRODUCTO_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        productos: [...state.productos, action.payload]
      };
    case AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };

    case COMENZAR_DESCARGA_PRODUCTOS:
      return {
        ...state,
        loading: true
      };
    case COMENZAR_DESCARGA_PRODUCTOS_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        productos: [...action.payload]
      };
    case COMENZAR_DESCARGA_PRODUCTOS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        productos: []
      };

    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        error: false,
        loading: true
      };
    case ELIMINAR_PRODUCTO_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        productos: state.productos.filter(
          producto => producto.id !== action.payload
        )
      };
    case ELIMINAR_PRODUCTO_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
}
