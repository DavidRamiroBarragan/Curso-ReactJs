import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Suscriptores from './components/suscriptores/Suscriptores';
import MostrarSuscriptor from './components/suscriptores/MostrarSuscriptor';
import NuevoSuscriptor from './components/suscriptores/NuevoSuscriptor';
import EditarSuscriptores from './components/suscriptores/EditarSuscriptores';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/suscriptores' component={Suscriptores}></Route>
          <Route
            exact
            path='/suscriptores/nuevo'
            component={NuevoSuscriptor}
          ></Route>
          <Route
            exact
            path='/suscriptores/mostrar/:id'
            component={MostrarSuscriptor}
          ></Route>
          <Route
            exact
            path='/suscriptores/editar/:id'
            component={EditarSuscriptores}
          ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
