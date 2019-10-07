import React, { useState } from 'react';

export default function AgregarProductos() {
  const [nombrePlatillo, guardarPlatillo] = useState('');
  const [precioPlatillo, guardarPrecio] = useState('');
  const [categoriaPlatillo, guardarCategoria] = useState('');

  const leerValorRadio = e => {
    guardarCategoria(e.target.value);
  };

  return (
    <div className='col-md-8 mx-auto '>
      <h1 className='text-center'>Agregar Nuevo Producto</h1>

      <form className='mt-5'>
        <div className='form-group'>
          <label>Nombre Platillo</label>
          <input
            type='text'
            className='form-control'
            name='nombre'
            placeholder='Nombre Platillo'
            onchange={guardarPlatillo}
          />
        </div>

        <div className='form-group'>
          <label>Precio Platillo</label>
          <input
            type='number'
            className='form-control'
            name='precio'
            placeholder='Precio Platillo'
            onchange={guardarPrecio}
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
              onchange={leerValorRadio}
            />
            <label className='form-check-label'>Postre</label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='categoria'
              value='bebida'
              onchange={leerValorRadio}
            />
            <label className='form-check-label'>Bebida</label>
          </div>

          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='categoria'
              value='cortes'
              onchange={leerValorRadio}
            />
            <label className='form-check-label'>Cortes</label>
          </div>

          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='categoria'
              value='ensalada'
              onchange={guardarCategoria}
            />
            <label className='form-check-label'>Ensalada</label>
          </div>
        </div>

        <input
          type='submit'
          className='font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3'
          value='Agregar Producto'
        />
      </form>
    </div>
  );
}
