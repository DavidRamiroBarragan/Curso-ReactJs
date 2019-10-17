import { combineReducers } from 'redux';
import productosReducer from './producto.reducer';
import validacionReducer from './validation.reducer';

export default combineReducers({
  productos: productosReducer,
  error: validacionReducer
});
