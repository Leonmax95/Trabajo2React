import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import toast, { Toaster } from "react-hot-toast";
import "../css/Item.css";

export const Item = ({ producto }) => {
    const { agregarAlCarrito } = useContext(CartContext);

    const agregarCarrito = () => {
        agregarAlCarrito(producto, 1);
        toast.success("Producto agregado al carrito", {
            position: "bottom-right"
        });
    };

    return (
        <div className="producto">
            <Toaster /> {/* Este componente renderiza los toasts */}
            <img src={producto.imagen} alt={producto.nombre} />
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
