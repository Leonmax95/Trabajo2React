import { Link } from 'react-router-dom'
import ItemCount from './ItemCount';



export const Item = ({ producto }) => {
    return (
        <div className="producto2">
            <img src = {producto.imagen} />
            <h2>{producto.nombre}</h2>

            <p style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>Ingredientes:
                <span style={{ display: "inline-block", marginLeft: ".5rem" }}></span>
           </p>

        
            <ItemCount />
            <Link to={`/`}>Volver</Link>
        </div>
    )
}