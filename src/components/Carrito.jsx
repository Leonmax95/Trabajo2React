import { Fragment, useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import Swal from "sweetalert2";
import "../css/Carrito.css";

const Carrito = () => {
    const { carrito, calcularTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const [docId, setDocId] = useState("");
    const [isCheckoutVisible, setCheckoutVisible] = useState(true);

    const eliminarProd = (prod) => {
        eliminarProducto(prod);
        toast.error("Producto eliminado del carrito", {
            position: "bottom-right"
        });
    };

    const realizarCompra = async (data) => {
        if (carrito.length === 0) {
            toast.error("El carrito está vacío", {
                position: "bottom-right"
            });
            return;
        }

        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal(),
            fecha: Timestamp.now()
        };

        const pedidosRef = collection(db, "pedidos");

        try {
            console.log("Intentando agregar documento a Firebase...");
            const doc = await addDoc(pedidosRef, pedido);
            setDocId(doc.id);
            vaciarCarrito();
            setCheckoutVisible(false);
            Swal.fire({
                title: "Compra realizada!",
                text: `Muchas gracias por su compra. Su ID de pedido es: ${doc.id}`,
                icon: "success"
            }).then(() => {
                navigate("/"); // Redirige al usuario a la página de inicio
            });
            console.log("Documento agregado con ID: ", doc.id);
            reset(); // Resetea el formulario
        } catch (error) {
            console.error("Error al agregar el documento: ", error);
            toast.error("Error al realizar la compra", {
                position: "bottom-right"
            });
        }
    };

    return (
        <div className="carrito-container">
            <Toaster />
            {carrito.map((prod) => (
                <Fragment key={prod.id}>
                    <div className="carrito-item">
                        <h1>
                            {prod.nombre}: ${prod.precio}
                        </h1>
                        <p>Cantidad: {prod.cantidad ? prod.cantidad : 1}</p>
                        <button
                            onClick={() => eliminarProd(prod)}
                        >
                            ❌
                        </button>
                    </div>
                </Fragment>
            ))}
            {carrito.length > 0 ? (
                <div className="carrito-total">
                    <h2>Total: ${calcularTotal()}</h2>
                    {isCheckoutVisible && (
                        <form className="checkout-form" onSubmit={handleSubmit(realizarCompra)}>
                            <h2>Ingrese sus datos para recibir su factura</h2>
                            <input type="text" placeholder="Ingrese su nombre" {...register("nombre", { required: true })} />
                            <input type="email" placeholder="Ingrese su e-mail" {...register("email", { required: true })} />
                            <div className="carrito-buttons">
                                <button type="button" onClick={vaciarCarrito}>Vaciar carrito</button>
                                <button type="submit">Finalizar compra</button>
                            </div>
                        </form>
                    )}
                </div>
            ) : (
                <h2 className="carrito-empty">Carrito vacío :/</h2>
            )}
        </div>
    );
};

export default Carrito;