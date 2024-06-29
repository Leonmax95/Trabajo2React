import { Fragment, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import "../css/Carrito.css";

const Carrito = () => {
  const { carrito, calcularTotal, vaciarCarrito, eliminarProducto } =
    useContext(CartContext);
  const navigate = useNavigate();

    const eliminarProd = (prod) => {
      eliminarProducto(prod);
      toast.error("Producto eliminado del carrito");
    };

    const realizarCompra = () => {
      if (carrito.length === 0) {
        toast.error("El carrito está vacío");
        return;
      }
      
      Swal.fire({
        title: "Seguro que quieres finalizar la compra?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, finalizar."
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Compra realizada!",
            text: "Muchas gracias por su compra.!",
            icon: "success"
          });
        }
      });
      vaciarCarrito();
      navigate("/finalizar-compra");
    };

  return (
    <div className="carrito-container">
      {carrito.map((prod) => {
        return (
          <Fragment key={prod.id}>
            <div className="carrito-item">
              <h1>
                {prod.nombre}: ${prod.precio}
              </h1>
              <p>Cantidad: {prod.cantidad ? prod.cantidad : 1}</p>
              <button
                onClick={() => {
                  eliminarProd(prod);
                }}
              >
                ❌
              </button>
            </div>
          </Fragment>
        );
      })}
      {carrito.length > 0 ? (
        <div className="carrito-total">
          <h2>Total: ${calcularTotal()}</h2>
          <div className="carrito-buttons">
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
            <button onClick={realizarCompra}>Finalizar compra</button>
          </div>
        </div>
      ) : (
        <h2 className="carrito-empty">Carrito vacío :/</h2>
      )}
    </div>
  );
};

export default Carrito;
