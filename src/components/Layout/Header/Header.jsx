// Importamos componentes
import Navbar from "./Navbar";
// Importamos estilos
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <strong>
          <span className={styles.red}>Burgers</span>
          <span className={styles.green}> & Go</span>
        </strong>
      </h1>
      <Navbar />
    </header>
  );
}

// Importante para poder usarlo en Layout.jsx
export default Header;
