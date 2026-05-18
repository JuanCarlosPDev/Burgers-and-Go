import { createRoot } from "react-dom/client";
// Permite definir las rutas de navegación de la aplicación React
import { BrowserRouter } from "react-router-dom";
// Importamos estilos
import "./index.css";
// Importamos componentes
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
