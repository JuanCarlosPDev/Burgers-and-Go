// Permite definir las rutas de navegación de la aplicación React
import { Link } from "react-router-dom";
// Importamos estilos
import styles from "./Cart.module.css";

function AddButton({ mensaje }) {
  const agregarAlCarrito = () => {
    // Quiero que se ejecute cuando le doy clic
    alert(`Agregaste el producto al carrito.`);
  };

  return (
    <>
      <button onClick={agregarAlCarrito} className={styles.addBtn}>
        {mensaje}
      </button>
    </>
  );
}

// Importante para poder usarlo en Item.jsx;
export default AddButton;
