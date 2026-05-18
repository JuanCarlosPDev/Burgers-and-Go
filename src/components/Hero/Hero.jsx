// Permite definir las rutas de navegación de la aplicación React
import { Link } from "react-router-dom";
// Configuración de las rutas
import { routes } from "../../Routes/Routes";
// Importamos estilos
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h2>¡Descubre el Sabor de la Perfección!</h2>
        <p>
          Nuestras hamburguesas gourmet están hechas con ingredientes frescos y
          100% carne de calidad. Una experiencia culinaria que no querrás
          perderte.
        </p>
        <Link to={routes.menu} className={styles.btn}>ORDENA AHORA</Link>
      </div>
    </section>
  );
}

// Importante para poder usarlo en Inicio.jsx
export default Hero;
