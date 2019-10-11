import {createStore} from 'redux';
import reducer from './reducers';
import {obtenerStateStorage, guardarStorage} from './localStorage';


const initialState = obtenerStateStorage();

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() =>{
  guardarStorage({
    citas: store.getState().citas
  })
});

export default store;
