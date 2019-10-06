import React from 'react'
import ProductoLista from './ProductoLista'

export default function Productos({productos}) {
  return (
    <>
      <h1 className="text-center">Productos</h1>
      <ul className="list-group mt-5">
        {productos.map( producto =>
          <ProductoLista producto={producto} key={producto.id}/>
        )}
      </ul>
    </>
  )
}
