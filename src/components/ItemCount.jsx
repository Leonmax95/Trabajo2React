import React, { useContext, useState } from 'react'
import { Item } from './Item';
import { CartContext } from '../context/CartContext';

const ItemCount = ({item}) => {

  const {carrito, setCarrito} = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    setCantidad(cantidad + 1)
  }

const handleAgregar = () => {
  const itemAgregado = {...item, cantidad};
  setCarrito([...carrito, itemAgregado]);
}

return (
  <div>
    <div className="item-count">
      <button className='btn1' onClick={handleRestar}>-</button>
      <p className='parrafo'>{cantidad}</p>
      <button className='btn2' onClick={handleSumar}>+</button>

    </div>
    <div> <button className='agregar-al-carrito' onClick={handleAgregar}>Agregar al carrito</button>
    </div>

  </div>
)
}

export default ItemCount
