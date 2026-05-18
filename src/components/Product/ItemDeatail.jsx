// Importamos useState y useEffect
import { useState, useEffect } from "react";
// Importamos useParams
import { useParams } from "react-router-dom";
// Importamos componentes
import AddButton from "../Cart/AddButton";
// Importamos estilos
import styles from "./Item.module.css";

const ItemDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch("/data/burguers.json")
      .then((response) => response.json())
      .then((data) => {
        const productoEncontrado = data.find((p) => p.id === parseInt(id));
        setProducto(productoEncontrado);
      })
      .catch((error) => console.error("Error al cargar el producto:", error));
  }, [id]);

  if (!producto) {
    return <p className="warning">Cargando detalle del producto...</p>;
  }

  if (!producto.id) {
    return <p className="error">Producto no encontrado!!</p>;
  }

  return (
    <section className={styles.detail}>
      <div>
        <img src={producto.imagen} alt={producto.nombre} width="200px" />
      </div>
      <div>
        <h3>{producto.nombre}</h3>
        <div className="line"></div>
        <span>$ {producto.precio}</span>
        <p>{producto.descripcion}</p>
        <p>
          <strong>Peso: </strong>
          {producto.peso}
        </p>
        <p>
          <strong>Tipo de pan: </strong>
          {producto.pan}
        </p>
        <p>
          <strong>Incluye: </strong>
          {producto.acompanamiento} + {producto.bebida}
        </p>
        <p>
          <strong>Ingredientes:</strong>
        </p>
        <ul>
          {producto.ingredientes.map((ingrediente) => (
            <li className={styles.list} key={ingrediente}>
              - {ingrediente}
            </li>
          ))}
        </ul>
        <AddButton mensaje="AGREGAR AL CARRITO" />
      </div>
    </section>
  );
};

export default ItemDetail;
