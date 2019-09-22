import React, { Component } from 'react';
import axios from 'axios';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {
  state = {
      eventos:[]
  };
  token = 'SIKCSR4LRTV474UBFBJN';
  order = 'date';
  obtenerEventos = async busqueda => {
    const url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.order}&token=${this.token}&locale=es_ES`;
    const eventos = await axios(url);

    console.log(`eventos ${eventos}`);
};
  render() {
    return (
        <EventosContext.Provider
        value={{
            eventos: this.state.eventos,
            obtenerEventos: this.obtenerEventos
        }}
        >
            {this.props.children}

        </EventosContext.Provider>
    );
  }
}

export default EventosProvider;
