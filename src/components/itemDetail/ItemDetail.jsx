import React from 'react'
    
export default function ItemDetail({item}) {
  return (
    <div className='itemDetail'>
      <div className='contenedor'>
      <h2>nombre {item.nombre}</h2>
      <img width={400} height={400} src={item.imagen} alt={item.nombre} />
      <h3>{item.detalle}</h3>
      <h4>${item.precio},00</h4>
      <h4>Especiales para {item.categorias}</h4>
      </div>
    </div>
  )
}
