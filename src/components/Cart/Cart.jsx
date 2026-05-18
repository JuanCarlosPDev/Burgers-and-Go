// Importamos estilos
import styles from "./Cart.module.css";

function Cart() {
  return (
    <div className={styles.emptyCart}>
      <i className="bi bi-cart-x"></i>
      <h1>Tu Carrito Está Vacío</h1>
      <p>Añade algunos productos para empezar a comprar</p>
    </div>
  );
}

// Importante para poder usarlo en Item.jsx;
export default Cart;
