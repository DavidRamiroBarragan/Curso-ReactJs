import React, { Component } from 'react';
import uuid from 'uuid';
const stateInicial = {
  cita: {
    id: '',
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  },
  error: false
};

class NuevaCitaComponent extends Component {
  state = {
    ...stateInicial
  };
  handleChange = e => {
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

    if (
      mascota === '' ||
      propietario === '' ||
      fecha === '' ||
      hora === '' ||
      sintomas === ''
    ) {
      this.setState({ error: true });
      return;
    }

    const nuevaCita = { ...this.state.cita };
    nuevaCita.id = uuid();

    this.props.crearNuevaCita(nuevaCita);
    this.setState({ ...stateInicial });
  };

  render() {
    const { error } = this.state;

    return (
      <div className='card mt-5 py-5'>
        <div className='card-body'>
          <div className='card-title text-center mb-5'>
            <h2>Rellena el formulario</h2>
          </div>
          {error ? (
            <div className='alert alert-danger mt-2 mb-5 text-center'>
              Todos los cambios son obligatorios
            </div>
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <div className='form-group row'>
              <label className='col-col-sm-4 col-lg-2 col-form-label'>
                Nombre Mascota
              </label>
              <div className='col-sm-8 col-lg-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre de mascota'
                  name='mascota'
                  value={this.state.cita.mascota}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-col-sm-4 col-lg-2 col-form-label'>
                Nombre Dueño
              </label>
              <div className='col-sm-8 col-lg-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre del propietario'
                  name='propietario'
                  value={this.state.cita.propietario}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-col-sm-4 col-lg-2 col-form-label'>
                Fecha
              </label>
              <div className='col-sm-8 col-lg-4'>
                <input
                  type='date'
                  className='form-control'
                  name='fecha'
                  value={this.state.cita.fecha}
                  onChange={this.handleChange}
                />
              </div>
              <label className='col-col-sm-4 col-lg-2 col-form-label'>
                Hora
              </label>
              <div className='col-sm-8 col-lg-4'>
                <input
                  type='time'
                  className='form-control'
                  name='hora'
                  value={this.state.cita.hora}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-col-sm-4 col-lg-2 col-form-label'>
                Fecha
              </label>
              <div className='col-sm-4 col-lg-10'>
                <textarea
                  className='form-control'
                  name='sintomas'
                  value={this.state.cita.sintomas}
                  onChange={this.handleChange}
                  placeholder='Describe los sintomas'
                ></textarea>
              </div>
            </div>
            <input
              type='submit'
              className='btn btn-success btn-block py-3 mt-2'
              value='Agregar nueva cita'
            />
          </form>
        </div>
      </div>
    );
  }
}

export default NuevaCitaComponent;
