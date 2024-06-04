import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../data/productos.json";
import { Item } from "./ItemDetail";

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);

    useEffect(() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId])


    return (
        <div>{producto ? <Item producto={producto} /> : "Cargando..."}</div>
    )
}

export default ItemDetailContainer