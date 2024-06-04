import { Link } from 'react-router-dom'

export const Item = ({ producto }) => {
    return (
        <div className="producto2">
            <img src={`/images/${producto.imagen}`} />
            <h2>{producto.nombre}</h2>

            <p style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>Ingredientes: {producto.ingredientes.map((ingrediente, index) => (
                <span key={index} style={{ display: "inline-block", marginLeft: ".5rem" }}>{ingrediente}</span>
            ))}</p>

            <p>pequeña: ${producto.tamanos.pequena || 0}</p>
            <p>mediana: ${producto.tamanos.mediana || 0}</p>
            <p>grande: ${producto.tamanos.grande || 0}</p>
            <Link to={`/`}>Volver</Link>
        </div>
    )
}