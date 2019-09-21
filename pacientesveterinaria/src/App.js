import React, { Component } from 'react';
import './bootstrap.min.css';
import HeaderComponent from './components/HeaderComponent';
import NuevaCitaComponent from './components/NuevaCitaComponent';
import ListaCitasComponent from './components/ListaCitasComponent';

class App extends Component {
  state = {
      citas: []
  };

  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita =  datos =>{
      const citas = [...this.state.citas, datos]
      this.setState({citas});
  };

  eliminarCita = id => {
    const citasActuales = [...this.state.citas];
    const citas = citasActuales.filter((cita) => cita.id !== id);
    this.setState({citas});
  }

  render() {
    return (
      <div className='container'>
        <HeaderComponent 
        titulo='Administrador de pacientes veterinarios'
         />
         <div className="row">
           <div className="col-md-10 mx-auto">
             <NuevaCitaComponent
             crearNuevaCita={this.crearNuevaCita}/>
           </div>
           <div className="mt-5 col-md-10 mx-auto">
             <ListaCitasComponent
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
             />
           </div>
         </div>
      </div>
    );
  }
}

export default App;
