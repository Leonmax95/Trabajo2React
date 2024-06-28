import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const Item = ({ producto }) => {

    return (
        <div className="producto">
            <img src={producto.imagen} />
            <h2>{producto.nombre}</h2>
            <h3>Precios</h3>
            
            <Link to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    )
}
