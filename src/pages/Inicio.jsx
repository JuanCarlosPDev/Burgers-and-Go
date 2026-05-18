// Importamos componentes
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";
import ItemListContainer from "../components/Product/ItemListContainer";
import SectionTitle from "../components/SectionTitle/SectionTitle";

function Inicio() {
  return (
    <>
      <Hero />
      <section className="section-m2">
        <SectionTitle
          subtitle="TENEMOS LAS MEJOR EXPERIENCIA PARA NUESTROS CLIENTES"
          title="¿POR QUÉ ELEGIRNOS?"
        />
        <Experience />
      </section>
      <section className="section-m1">
        <SectionTitle
          subtitle="LAS HAMBURGUESAS MÁS ELEGIDAS POR NUESTROS CLIENTES"
          title="LAS MÁS VENDIDA"
        />
        <ItemListContainer masVendidas={true} />
      </section>
    </>
  );
}

// Importante para poder usarlo en App.jsx;
export default Inicio;
