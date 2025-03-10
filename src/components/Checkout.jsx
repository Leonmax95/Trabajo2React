import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import "../css/Checkout.css";


export const Checkout = () => {

    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal(),
            fecha: Timestamp.now()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setDocId(doc.id);
                vaciarCarrito();
            })
    }

    if (docId) {
        return (
            <div className="checkout-message">
                <h1>Muchas gracias por tu compra</h1>
                <p>Para hacer el seguimiento de tu pedido, el identificador es este: {docId}</p>
            </div>
        )
    }

    return (
        <div className="checkout-container">
            <h1 className="checkout-title" style={{ color: 'black' }}>Ingrese sus datos para recibir su factura</h1>
            <form className="checkout-form" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingrese su e-mail" {...register("email")} />
                <button type="submit">Comprar</button>
            </form>
        </div>
    )
}
