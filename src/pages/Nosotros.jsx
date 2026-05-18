// Importamos componentes
import Staff from "../components/Staff/Staff";
import AboutUs from "../components/AboutUs/AboutUs";
import SectionTitle from "../components/SectionTitle/SectionTitle";

function Nosotros() {
  return (
    <>
      <section className="section-m2">
        <SectionTitle
          subtitle="¿QUÉ NOS MOTIVA DÍA A DÍA?"
          title="NUESTRA MISIÓN"
        />
        <AboutUs />
      </section>
      <section className="section-m1">
        <SectionTitle
          subtitle="LA MEJOR ATENCIÓN PARA NUESTROS CLIENTES"
          title="NUESTRO EQUIPO"
        />
        <Staff />
      </section>
    </>
  );
}

// Importante para poder usarlo en App.jsx;
export default Nosotros;
