import { Link } from 'react-router-dom'

export const Item = ({ producto }) => {
    return (
        <div className="producto">
            <img src={`/images/${producto.imagen}`} />
            <h2>{producto.nombre}</h2>
            <h3>Precios</h3>
            <p>pequeña: ${producto.tamanos.pequena || 0}</p>
            <p>mediana: ${producto.tamanos.mediana || 0}</p>
            <p>grande: ${producto.tamanos.grande || 0}</p>

            <Link to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    )
}
