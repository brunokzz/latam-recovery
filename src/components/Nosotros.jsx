import { Lightbulb, Handshake, BarChart3 } from "lucide-react";

const infoBoxes = [
  {
    title: "Valores",
    icon: <Lightbulb size={48} className="box-icon" />,
    items: [
      "Nuestros recursos humanos son nuestro principal capital e incentivamos el trabajo en equipo con incentivos que traccionan en ese sentido.",
      "Nos basamos en la responsabilidad, transparencia, confiabilidad y confidencialidad en todo el proceso de gestión de la cobranza.",
      "Nuestro compromiso es la excelencia para ser más eficientes y efectivos, con el fin de lograr mejores resultados a nuestro cliente.",
      "Contribuimos con las pequeñas, medianas y grandes empresas a recuperar sus deudas impagas y que sume al flujo de fondos de las mismas.",
    ],
  },
  {
    title: "Tecnología",
    icon: <BarChart3 size={48} className="box-icon" />,
    intro: "Contamos con tecnología de avanzada para la gestión de los distintos tipos de cartera.",
    items: [
      "CRM de gestión",
      "Discador Predictivo.",
      "SMS",
      "IVR",
      "WS",
      "Reportería.",
      "Nuestro Chatbot Lázaro.",
    ],
  },
  {
    title: "Visión",
    icon: <Handshake size={48} className="box-icon" />,
    items: [
      "Innovación continua en tecnología y mejora continua de procesos.",
      "Constante capacitación de nuestros equipos.",
      "Cumplir con los estándares de eficiencia y calidad de nuestros clientes.",
      "Nos destacamos por ser flexibles y conciliadores, mirando el proceso integral de la gestión y adecuándonos a las necesidades y particularidades de nuestros clientes y sus carteras.",
    ],
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="nosotros">
      <div className="container">
        <p className="eyebrow">NOSOTROS</p>
        <h2 className="section-title">
          Porque elegirnos
          <br />
          para su <strong>empresa?</strong>
        </h2>
        <p className="nosotros-mision">
          Nuestra misión consiste en crear alianzas comerciales con los
          distintos sectores empresariales, Financieros y Comerciales, con el
          fin de cubrir las necesidades de nuestros clientes en la gestión de
          impagos en cada estadío de la mora y contribuir en la restitución
          del flujo de fondos. Nos caracterizamos por ser una empresa que
          apunta a brindar servicio de excelencia integrados por equipos
          compuestos por profesionales con vasta experiencia y una sólida
          política de trabajo en equipo.
        </p>
      </div>

      <div id="valores" className="nosotros-boxes-bg">
        <div className="container nosotros-boxes">
          {infoBoxes.map((box) => (
            <div className="info-box" key={box.title}>
              {/* Encabezado con Icono + Título al lado */}
              <div className="info-box-header">
                {box.icon}
                <h4>{box.title}</h4>
              </div>

              {box.intro && <p className="info-box-intro">{box.intro}</p>}

              <ol className="info-box-list">
                {box.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}