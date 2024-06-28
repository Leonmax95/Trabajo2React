import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Item } from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);

    useEffect(() => {
      const docRef = doc(db, "productos", itemId);
      getDoc(docRef)
        .then(res => {
            setProducto({...res.data(), id: res.id})
        })
    }, [itemId])


    return (
        <div>{producto ? <Item producto={producto} /> : "Cargando..."}</div>
    )
}

export default ItemDetailContainer