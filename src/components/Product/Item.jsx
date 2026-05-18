// Permite definir las rutas de navegación de la aplicación React
import { Link } from "react-router-dom";
// Configuración de las rutas
import { routes } from "../../Routes/Routes";
// Importamos componentes
import AddButton from "../Cart/AddButton";
// Importamos estilos
import styles from "./Item.module.css";

export function Item({ id, imagen, nombre, descripcion, precio }) {
  return (
    <div className={styles.card}>
      <img src={imagen} alt={nombre} width="200px" />
      <Link to={routes.detalle(id)} className={styles.btn}><i className="bi bi-zoom-in"></i></Link>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <span>${precio}</span>
      <AddButton mensaje="PEDIR AHORA"/>
    </div>
  );
}
