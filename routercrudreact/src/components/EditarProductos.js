import React,{useState, useRef} from 'react'
import Error from './Error';
import Swal from 'sweetalert2';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


function EditarProductos({producto, history, setRecargar}) {
  const [error, guardarError] = useState(false);
  const [categoriaPlatillo, guardarCategoria] = useState('');

  const precioPlatilloRef = useRef('');
  const nombrePlatilloRef = useRef('');

  let {precioPlatillo, nombrePlatillo, categoria, id } = producto ? producto : '';

  if(!producto){
    console.log(history);
  }


  const getCategoria = () => (categoria === '') ? categoriaPlatillo : categoria;

  const editarProducto = async (e) =>{
      e.preventDefault();

      if (nombrePlatilloRef.current.value === '' && precioPlatilloRef.current.value === '' && categoriaPlatillo === '') {
        guardarError(true);

        return;
      }

      const _categoriaPlatillo = getCategoria();
      const nuevoPlato = {
        precioPlatillo: precioPlatilloRef.current.value,
        nombrePlatillo: nombrePlatilloRef.current.value,
        categoria: _categoriaPlatillo,
      }

      try {
        const resultado = await axios.put(`http://localhost:4000/restaurant/${id}`, nuevoPlato);
        console.log(resultado.status);
        if(resultado.status === 200){
          Swal.fire(
            'Producto editado',
            'El producto se editó correctamente',
            'success'
          );
        }

        setRecargar(true);
        history.push('/productos');

      } catch (error) {
        console.log(error);
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
  };

  const leerValorRadio = e => {
    guardarCategoria(e.target.value);
  };

  return (

    <div className='col-md-8 mx-auto '>
      <h1 className='text-center'>Editar producto</h1>
      {error && <Error mensaje='Todos los campos son obligatorios' />}

      <form className='mt-5' onSubmit={editarProducto}>
        <div className='form-group'>
          <label>Nombre Platillo</label>
          <input
            type='text'
            className='form-control'
            name='nombre'
            placeholder='Nombre Platillo'
            ref = {nombrePlatilloRef}
            defaultValue = {nombrePlatillo}
          />
        </div>

        <div className='form-group'>
          <label>Precio Platillo</label>
          <input
            type='number'
            className='form-control'
            name='precio'
            placeholder='Precio Platillo'
            ref={precioPlatilloRef}
            defaultValue={precioPlatillo}
          />
        </div>

        <legend className='text-center'>Categoría:</legend>
        <div className='text-center'>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='categoria'
              value='postre'
              onChange={leerValorRadio}
              defaultChecked={categoria === 'postre'}
            />
            <label className='form-check-label'>Postre</label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='categoria'
              value='bebida'
              onChange={leerValorRadio}
              defaultChecked={categoria === 'bebida'}
            />
            <label className='form-check-label'>Bebida</label>
          </div>

          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='categoria'
              value='cortes'
              onChange={leerValorRadio}
              defaultChecked={categoria === 'cortes'}
            />
            <label className='form-check-label'>Cortes</label>
          </div>

          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='categoria'
              value='ensalada'
              onChange={guardarCategoria}
            />
            <label className='form-check-label'>Ensalada</label>
          </div>
        </div>

        <input
          type='submit'
          className='font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3'
          value='Editar producto'
        />
      </form>
    </div>
  )
}
export default withRouter(EditarProductos);
