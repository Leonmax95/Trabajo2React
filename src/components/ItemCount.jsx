import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import toast, { Toaster } from "react-hot-toast";
import "../css/ItemCount.css";

const ItemCount = ({ item }) => {
    const { agregarAlCarrito } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    };

    const handleSumar = () => {
        setCantidad(cantidad + 1);
    };

    const handleAgregar = () => {
        agregarAlCarrito(item, cantidad);
        toast.success("Producto agregado al carrito", {
            position: "bottom-right"
        });
    };

    return (
        <div>
            <Toaster /> {/* Este componente renderiza los toasts */}
            <div className="item-count">
                <button className="btn1" onClick={handleRestar}>
                    -
                </button>
                <p className="parrafo">{cantidad}</p>
                <button className="btn2" onClick={handleSumar}>
                    +
                </button>
            </div>
            <div>
                <button className="agregar-al-carrito" onClick={handleAgregar}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
