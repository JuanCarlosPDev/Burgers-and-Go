// Importamos componentes
import ItemListContainer from "../components/Product/ItemListContainer";
import SectionTitle from "../components/SectionTitle/SectionTitle";

function Menu() {
  return (
    <>
      <section className="section-m1">
        <SectionTitle
          subtitle="LAS HAMBURGUESAS MÁS DELICIOSAS"
          title="ELIJA Y DISFRUTE"
          text="Ya sea que anheles sabores clásicos o combinaciones atrevidas, aquí comienza tu viaje culinario. Satisface tus antojos y saborea cada bocado mientras creas tu experiencia de hamburguesa personalizada con Burger & Go."
        />
        <ItemListContainer />
      </section>
    </>
  );
}

// Importante para poder usarlo en App.jsx;
export default Menu;
