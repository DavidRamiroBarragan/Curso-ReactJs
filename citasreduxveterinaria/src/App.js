import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import AgregarCita from './componentes/AgregarCita';
import ListadoCitas from './componentes/ListadoCitas';

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <header className='text-center'>
          <h1>Administrador d epacientes de Veterinaria</h1>
        </header>

        <div className='row mt-3'>
          <div className='col-md-6'>
            <AgregarCita />
          </div>
          <div className='col-md-6'>
            <ListadoCitas />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
