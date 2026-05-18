// Importamos estilos
import styles from "./Footer.module.css";

function FooterSocial() {
  return (
    <>
      <h4>Seguinos</h4>
      <div className={styles.socialLink}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          aria-label="Facebook de Burgers & Go"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          aria-label="X (Twitter) de Burgers & Go"
        >
          <i className="bi bi-twitter-x"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          aria-label="Instagram de Burgers & Go"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          aria-label="YouTube de Burgers & Go"
        >
          <i className="bi bi-youtube"></i>
        </a>
      </div>
    </>
  );
}

// Importante para poder usarlo en Footer.jsx
export default FooterSocial;
