import { combineReducers } from 'redux';
import productosReducer from './produucto.reducer';
import validacionReducer from './validation.reducer';

export default combineReducers({
  productos: productosReducer,
  error: validacionReducer
});
