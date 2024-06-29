import { Item } from "./Item";
import "../css/ItemList.css";

export const ItemList = ({ productos }) => {
  return (
    <div className="productos-grilla">
      {productos.length > 0 ? (
        productos.map((producto) => {
          return <Item key={producto.id} producto={producto} />;
        })
      ) : (
        <p className="cargando-producto">Cargando productos...</p>
      )}
    </div>
  );
};
