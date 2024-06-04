import { useEffect, useState } from 'react';
import data from "../data/productos.json";
import categories from "../data/categorias.json";
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({ greating }) => {

    let { categoryId } = useParams();
    let [productos, setProductos] = useState([]);

    let [titulo, setTitulo] = useState("Productos");

    const pedirProductos = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        })
    }

    useEffect(() => {

        pedirProductos()
            .then((res) => {
                if (!categoryId) {
                    setTitulo("Productos");
                    setProductos(res);
                } else {
                    setTitulo(categories.find((cat) => cat.id === categoryId).nombre);
                    setProductos(res.filter((prod) => prod.categoria.id === categoryId));
                }
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