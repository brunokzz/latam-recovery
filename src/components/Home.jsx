import Hero from "./Hero";
import Nosotros from "./Nosotros";
import Gestion from "./Gestion";
import Tecnologia from "./Tecnologia";
import AmbitoGestion from "./AmbitoGestion";
import Clientes from "./Clientes";
import Staff from "./Staff";
import Contacto from "./Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <Nosotros />
      <Gestion />
      <Tecnologia />
      <AmbitoGestion />
      <Clientes />
      {/* <Staff /> */}
      <Contacto />
    </>
  );
}