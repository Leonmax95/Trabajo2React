import "./css/main.css"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import NotFound from "./components/NotFound";
import { ItemListContainer } from "./components/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from "./components/Carrito";
import { CartProvider, CartContext } from "./context/CartContext";
import { Suma } from "./components/Suma";
import { Checkout } from "./components/Checkout";
import { CargarProductos } from "./components/CargarProductos";

function App() {
    const [carrito, setCarrito] = useState([]);
    const greeting = "I Love Pizza";

    return (
        <CartContext.Provider value={{ carrito, setCarrito }}>
            <CartProvider>
                <BrowserRouter>
                    <Header carrito={carrito} setCarrito={setCarrito} />
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting={greeting} />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer greeting={greeting} />} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/carrito" element={<Carrito />} />
                        <Route path="/suma" element={<Suma />} />
                        <Route path="/finalizar-compra" element={<Checkout />} />
                        <Route path="/cargar-productos" element={<CargarProductos />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CartProvider>
        </CartContext.Provider>
    );
}

export default App;
