import {combineReducers} from 'redux';
import productosReducer from "./produucto.reducer";

export default combineReducers({
  productos: productosReducer
});
