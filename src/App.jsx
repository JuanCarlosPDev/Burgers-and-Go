// Permite definir las rutas de navegación de la aplicación React
import { Routes, Route } from "react-router-dom";
// Importamos componentes
import Layout from "./components/Layout/Layout";
// Iportamos las páginas de la aplicación
import Inicio from "./Pages/Inicio";
import Menu from "./pages/Menu";
import Detalle from "./pages/Detalle";
import Nosotros from "./pages/Nosotros";
import Carrito from "./pages/Carrito";
// Configuración de las rutas
import { routes } from "./Routes/Routes";
// Importamos estilos
import "./App.css";
// Importamos bootstrap para iconos
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <Routes>
      <Route path={routes.inicio} element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path={routes.menu} element={<Menu />} />
        <Route path={routes.menuDetalle} element={<Detalle />} />
        <Route path={routes.nosotros} element={<Nosotros />} />
        <Route path={routes.carrito} element={<Carrito />} />
      </Route>
    </Routes>
  );
}

// Importante para poder usarlo en main.jsx;
export default App;
