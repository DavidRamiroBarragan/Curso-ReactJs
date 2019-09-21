import React, {Component} from 'react';

// bcd80ac5cae74465a8bf672e46d2d25b

export default class App extends Component {
  state = {
    noticias: []
  };

   componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async () =>{
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=bcd80ac5cae74465a8bf672e46d2d25b`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({noticias: noticias.articles});
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}
