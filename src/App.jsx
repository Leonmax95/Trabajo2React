import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header"
import NotFound from "./components/NotFound"
import { ItemListContainer } from "./components/ItemListContainer"
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./css/main.css"
import { CartContext } from "./context/CartContext";
import Carrito from "./components/header/Carrito";

function App() {

  const [carrito, setCarrito] = useState([]);
  const greating = "I Love Pizza";


  return (
    <CartContext.Provider value={{carrito, setCarrito}}>
    <BrowserRouter>
      <Header carrito={carrito} setCarrito={setCarrito} />
      <Routes>
        <Route path="/" element={<ItemListContainer greating={greating}/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer greating={greating}/>}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App