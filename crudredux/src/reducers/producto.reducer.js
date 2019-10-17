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

//Cada reducer tiene su propio state

const initialState = {
  productos: [],
  error: null,
  loading: false,
  producto: {}
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
        loading: true,
        producto: {}
      };
    case COMENZAR_DESCARGA_PRODUCTOS_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        productos: [...action.payload],
        producto: {}
      };
    case COMENZAR_DESCARGA_PRODUCTOS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        productos: [],
        producto: {}
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
    case OBTENER_EDITAR_PRODUCTO:
      return {
        ...state,
        loading: true
      };
    case OBTENER_EDITAR_PRODUCTO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        producto: action.payload
      };
    case OBTENER_EDITAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case EDITAR_PRODUCTO:
      return {
        ...state,
        loading: true
      };
    case EDITAR_PRODUCTO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        productos: state.productos.map(producto =>
          producto.id === action.payload.id
            ? (producto = action.payload)
            : producto
        )
      };
    case EDITAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}
