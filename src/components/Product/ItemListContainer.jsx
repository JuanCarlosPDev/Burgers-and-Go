// Importamos useStae y useEffect
import { useState, useEffect } from "react";
// Importamos componentes
import { ItemList } from "./ItemList";
import SectionTitle from "../SectionTitle/SectionTitle";
// Importamos estilos
import styles from "./Item.module.css";

function ItemListContainer({ masVendidas }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/burguers.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información de los productos");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p className="warning">Cargando productos, por favor espere...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  // Nos permite filtrar los productos más vendidos
  const verProductos = masVendidas
    ? productos.filter((prod) => prod.masVendida)
    : productos;

  return (
    <div className={styles.flexCard}>
      <ItemList productos={verProductos} />
    </div>
  );
}

// Clave para poder usarlo en App.jsx
export default ItemListContainer;
