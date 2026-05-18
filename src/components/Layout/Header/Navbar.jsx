// Permite definir las rutas de navegación de la aplicación React
import { Link } from "react-router-dom";
// Importamos useState
import { useState } from "react";
// Configuración de las rutas
import { routes } from "../../../Routes/Routes";
// Importamos estilos
import styles from "./Header.module.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para detectar si se preciono el boton
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  // Función para cerrar el menú
  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <button className={styles.hamburger} onClick={toggleMenu}><i className="bi bi-list"></i></button>
      <nav className={isOpen ? `${styles.navbar} ${styles.active}`: styles.navbar}>
        <Link to={routes.inicio} onClick={closeMenu}>Inicio</Link>
        <Link to={routes.menu} onClick={closeMenu}>Menú</Link>
        <Link to={routes.nosotros} onClick={closeMenu}>Nosotros</Link>
        <Link to={routes.carrito} onClick={closeMenu}>Carrito</Link>
      </nav>
    </>
  );
}

// Importante para poder usarlo en Header.jsx
export default NavBar;
