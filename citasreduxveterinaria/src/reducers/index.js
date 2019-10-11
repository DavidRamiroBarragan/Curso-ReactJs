import {combineReducers} from 'redux';
import citasReducer from './citas.reducer';

export default combineReducers({
  citas: citasReducer
});
