import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "../css/ItemDetail.css";

export const ItemDetail = ({ producto }) => {

  return (
    <div className="producto2">
      <img src={producto.imagen} />
      <h2>{producto.nombre}</h2>

      <p style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
        Ingredientes:
        <span style={{ display: "inline-block", marginLeft: ".5rem" }}>
          {producto.ingredientes}
        </span>
      </p>

      <ItemCount item={producto} />
      <Link className="volver" to={`/`}>Volver</Link>
    </div>
  );
};
