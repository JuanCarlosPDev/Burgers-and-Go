import { useState } from "react";

/* Estilos */
import styles from "./staff.module.css";

function StaffCard({ nombre, rol, imagen, bio }) {
  return (
    <div className={styles.card}>
      <div className={styles.flexbox}>
        <img src={imagen} alt={rol} />
        <div>
          <h4>{rol}</h4>
          <h3>{nombre}</h3>
        </div>
      </div>
      <p>"{bio}"</p>
    </div>
  );
}

export default StaffCard;
