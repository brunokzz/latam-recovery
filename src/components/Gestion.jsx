import gestionImg from "../assets/gestion.png";

export default function Gestion() {
  return (
    <section id="gestión" className="gestion">
      <div className="container gestion-inner">
        <div className="gestion-image-placeholder">
          <img src={gestionImg} alt="Gestión de Cobranzas" />
        </div>

        <div className="gestion-content">
          <p className="eyebrow">GESTIÓN</p>
          <h2 className="section-title">
            Soluciones en Gestión
            <br />
            de <strong>Cobranzas</strong>
          </h2>
          <p>
            Flexibilidad en el proceso integral de la gestión, aplicando
            herramientas adecuándonos a las necesidades y particularidades de
            nuestros clientes y sus carteras.
          </p>
          <div className="gestion-actions">
            <a href="#contacto" className="btn btn-primary">
              Consultar
            </a>
            <a href="#clientes" className="btn btn-outline">
              Clientes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
