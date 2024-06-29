import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, cantidad) => {
    const productoExistente = carrito.find((prod) => prod.id === producto.id);

    if (productoExistente) {
      setCarrito(
        carrito.map((prod) =>
          prod.id === producto.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
  };

  const calcularCantidad = () => {
    return carrito.length;
  };

  const calcularTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0).toFixed(2);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const eliminarProducto = (producto) => {
    const productoEncontrado = carrito.find((prod) => prod.id === producto.id);
    const indice = carrito.indexOf(productoEncontrado);

    setCarrito(carrito.filter((prod) => prod.id !== producto.id));
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        calcularCantidad,
        calcularTotal,
        vaciarCarrito,
        eliminarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
