import {combineReducers} from 'redux';
import citasReducer from './citas.reducer';
import validacionReducer from './validacion.reducer';

export default combineReducers({
  citas: citasReducer,
  error: validacionReducer
});
