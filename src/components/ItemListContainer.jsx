import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemListContainer = ({ greating }) => {

    let { categoryId } = useParams();
    let [productos, setProductos] = useState([]);

    let [titulo, setTitulo] = useState("Productos");

    useEffect(() => {

        const productosRef = collection(db, "productos");
        const q = query(productosRef, where("categorias.id", "==", categoryId));

        getDocs(q)
        .then((res) => {
            setProductos(
                res.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                })
            )
        })
    
    }, [categoryId]);


    return (
        <div className="item-list-container">
            <h1 style={{ textAlign: "center" }}>{greating}</h1>
            <h2 style={{ textAlign: "center" }}>{titulo}</h2>
            <ItemList productos={productos} />
        </div>
    )
}