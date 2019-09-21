import React, {Component} from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

// bcd80ac5cae74465a8bf672e46d2d25b

export default class App extends Component {
  state = {
    noticias: []
  };

   componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') =>{
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=bcd80ac5cae74465a8bf672e46d2d25b`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({noticias: noticias.articles});
  }
  render() {
    return (
      <>
        <Header titulo="Noticias React API"/>
        <div className="container white contenedor-noticias">
          <Formulario
            consultarNoticias= {this.consultarNoticias}
          />
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </>
    );
  }
}
