import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Productos from './components/Productos';
import AgregarProductos from './components/AgregarProductos';
import EditarProductos from './components/EditarProductos';
import Producto from './components/Producto';
import Header from './components/Header';
import axios from 'axios';

function App() {
  const [productos, setProductos] = useState([]);
  const [recargar, setRecargar] = useState(true);

  useEffect(() => {
    if (recargar) {
      const consultarApi = async () => {
        const resultados = await axios.get('http://localhost:4000/restaurant');
        setProductos(resultados.data);
      };

      consultarApi();
      setRecargar(false);
    }
  }, [recargar]);

  return (
    <Router>
      <Header />
      <main className='container mt-5'>
        <Switch>
          <Route
            exact
            path='/nuevo-producto'
            render={() => <AgregarProductos setRecargar={setRecargar} />}
          />
          <Route
            exact
            path='/productos'
            render={() => <Productos productos={productos} />}
          />
          <Route exact path='/productos/:id' component={Producto} />
          <Route
            exact
            path='/productos/editar/:id'
            render={({match: {params: {id}}}) => {
              const producto = productos.find(producto => producto.id === parseInt(id))
              return <EditarProductos producto={producto} setRecargar={setRecargar} />;
            }}
          />
        </Switch>
        <p className='mt-4 p2 text-center'>Todos los derechos reservados</p>
      </main>
    </Router>
  );
}

export default App;
