import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";
import "../css/Item.css";

export const Item = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  const agregarCarrito = () => {
    agregarAlCarrito(producto, 1);
    toast.success("Producto agregado al carrito");
  };

  return (
    <div className="producto">
      <img src={producto.imagen} />
      <h2>{producto.nombre}</h2>
      <p>Costo ${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <Link className="link-item" to={`/item/${producto.id}`}>Ver más</Link>
      <button className="boton-agregar" onClick={agregarCarrito}>
        Agregar al carrito
      </button>
    </div>
  );
};
