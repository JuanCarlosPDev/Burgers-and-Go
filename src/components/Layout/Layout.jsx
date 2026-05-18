// Importamos Outlet
import { Outlet } from "react-router-dom";
// Importamos componentes
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// Importante para poder usarlo en App.jsx;
export default Layout;
