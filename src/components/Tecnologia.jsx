import tecnologiaJpg from '../assets/tecnologia.jpg'
import recuperosJpg from '../assets/recuperos.jpg'

export default function Tecnologia() {
  return (
    <>
      <section id="tecnología" className="tecnologia">
        <div className="container tecnologia-inner">
          <div className="tecnologia-content">
            <p className="eyebrow eyebrow-light">TECNOLOGÍA</p>
            <h2 className="section-title">
              Personal dedicado
              <br />a la <strong>gestión de cobro</strong>
              <br />
              exclusivamente
            </h2>
            <p>
              La gestión de cobranzas de su cartera de clientes en manos de
              personal exclusivamente dedicado a la gestión de cobro de sus
              carteras quienes son periódicamente capacitados e instruidos
              para la ejecución eficiente y efectiva de nuestros objetivos.
            </p>
            <h3>Contamos con tecnología IP.</h3>

            <div className="tecnologia-boxes">
              <div className="info-box info-box-sm">
                <h4>Equipamiento tecnológico</h4>
                <p>
                  de vanguardia para brindarle el respaldo que sus carteras
                  necesitan
                </p>
              </div>
              <div className="info-box info-box-sm">
                <h4>Informes periódicos</h4>
                <p>
                  sobre el tratamiento de las asignaciones otorgadas para
                  medir el desempeño, logros y efectividad.
                </p>
              </div>
            </div>
          </div>

          <div className="tecnologia-image-placeholder">
            <img src={tecnologiaJpg} alt="" style={{maxWidth: "100%"}} />
          </div>
        </div>
      </section>

      <section className="recuperos">
        <div className="container recuperos-inner">
          <div className="recuperos-image-placeholder">
            <img src={recuperosJpg} alt="" style={{maxWidth: "100%"}} />
          </div>
          <div className="recuperos-content">
            <p className="eyebrow">SOLUCIONES</p>
            <h2 className="section-title">
              Cobranzas &amp;
              <br />
              <strong>Recuperos</strong> Judiciales
            </h2>
            <p>
              Nuestro staff cuenta con letrados especializados en la gestión
              de cobranzas y recuperos judiciales, ejecuciones y secuestros
              prendarios, ejecuciones hipotecarias y representación en los
              laudos administrativos y judiciales en acciones con fundamentos
              en la Ley de Defensa del Consumidor.
            </p>
            <div className="recuperos-actions">
              <a href="#contacto" className="btn btn-primary">
                Consultar
              </a>
              <a href="#" className="btn btn-outline">
                Conocer más
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
