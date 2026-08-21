import { Link } from "react-router-dom";

const servicios = [
  {
    title: "Gestión Extra Judicial",
    href: "/latam-recovery/servicio/gestion-extrajudicial",
    image: "/latam-recovery/img-servicios/extrajudicial.jpg",
    description: `Mora preventiva: es una gestión amistosa con el fin de anticiparnos antes que el cliente se convierta en deudor "recordándole" el vencimiento de su obligación y comprometiéndolo con una fecha de pago. Se trata de clientes con posibilidades de atraso o por no tener conocimiento adecuado del funcionamiento del producto.

Mora temprana: gestionar los clientes en atraso para la regularización de su deuda evitando el pase a mora avanzada con mayores impactos en resultados.

Mora avanzada: contamos con la experiencia de expertos en negociación de deudas en los distintos segmentos y productos, brindando soluciones a medida de los deudores, que permita maximizar el recupero de la deuda en el menor tiempo posible.`,
  },
  {
    title: "Gestión Judicial",
    href: "/latam-recovery/servicio/gestion-judicial",
    image: "/latam-recovery/img-servicios/judicial.jpg",
    description:
      "Nuestro staff cuenta con letrados especializados en la gestión de cobranzas y recuperos judiciales, ejecuciones y secuestros prendarios, ejecuciones hipotecarias y representación en los laudos administrativos y judiciales en acciones con fundamentos en la Ley de Defensa del Consumidor.",
  },
  {
    title: "Auditorías de Gestión",
    href: "/latam-recovery/servicio/auditorias-gestion",
    image: "/latam-recovery/img-servicios/auditorias.jpg",
    description:
      "Contamos con un staff que nos permite realizar controles de Gestión a Agencias / Estudios Jurídicos con el fin de detectar desvíos y contribuir a la Eficiencia de la gestión.",
  },
  {
    title: "Consultorías de Cobranzas",
    href: "/latam-recovery/", // Redirige al inicio
    image: "/latam-recovery/img-servicios/consultorias.jpg",
    description: ""
  }
];

export default function AmbitoGestion() {
  return (
    <section id="servicios" className="ambito-gestion">
      <div className="container">
        <h2 className="section-title">
          <strong>ÁMBITO</strong> DE GESTIÓN
        </h2>
        <p className="ambito-subtitle">
          Contribuimos con nuestro cliente...
        </p>

        <div className="servicios-grid">
          {servicios.map((s) => (
            <Link to={s.href} className="servicio-card" key={s.title}>
              <div className="servicio-card-image-wrapper">
                <img src={s.image} alt={s.title} className="servicio-card-image" />
              </div>
              <h3>{s.title}</h3>
              {s.description && <p>{s.description}</p>}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}