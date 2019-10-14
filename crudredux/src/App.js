import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Productos from './components/Productos';
import Header from './components/Header';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

function App() {
  return (
    <Router>
    <Provider store={store}>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Productos} />
          <Route exact path='/producto/nuevo' component={NuevoProducto} />
          <Route exact path='/producto/editar/:id' component={EditarProducto} />
        </Switch>
      </div>
    </Provider>
    </Router>
  );
}

export default App;
