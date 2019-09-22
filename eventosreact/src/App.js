import React from 'react';
import Header from './components/Header';
import CategoriasProvider from './context/CategoriasContext';
import Formulario from './components/Formulario';
import EventosProvider from './context/EventosContext';

function App() {
  return (
    <>
      <Header />
      <div className='uk-container'>
        <CategoriasProvider>
          <EventosProvider>
            <Formulario />
          </EventosProvider>
        </CategoriasProvider>
      </div>
    </>
  );
}

export default App;
