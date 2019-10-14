import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_SUCCESS,
  AGREGAR_PRODUCTO_ERROR
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
        }
    case AGREGAR_PRODUCTO_SUCCESS:
        return {
          ...state,
          error: null,
          loading: false,
          productos: [...state.productos, action.payload]
        }
    case AGREGAR_PRODUCTO_ERROR:
        return {
          ...state,
          error: true,
          loading: false
        }

    default:
      return state;
  }
}
