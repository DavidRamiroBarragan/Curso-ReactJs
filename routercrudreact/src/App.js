import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Productos from './components/Productos';
import AgregarProductos from './components/AgregarProductos';
import EditarProductos from './components/EditarProductos';
import Producto from './components/Producto';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <main className="container mt-5">
      <Switch>
        <Route exact path='/nuevo-producto' component={AgregarProductos}/>
        <Route exact path='/productos' component={Productos}/>
        <Route exact path='/productos/:id' component={Producto}/>
        <Route exact path='/productos/editar/:id' component={EditarProductos}/>
      </Switch>
      <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
      </main>
    </Router>
  );
}

export default App;
