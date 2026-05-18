// Importamos useState y useEffect
import { useState, useEffect } from "react";
// Importamos componentes
import StaffCard from "./StaffCard";
// Importamos estilos
import styles from "./staff.module.css";

function Staff() {
  const [staff, setStaff] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/staff.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información de los contactos");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setStaff(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p className="warning">Cargando datos, por favor espere...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className={styles.grid}>
      {staff.map((staff) => (
        <StaffCard key={staff.id} {...staff} />
      ))}
    </div>
  );
}

// Importante para poder usarlo en Nosotros.jsx
export default Staff;
