export default function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <div className="container contacto-inner-simple">
        <h2 className="section-title">
          <strong>CONTACTO</strong>
        </h2>
        <p className="contacto-subtitle">
          Estamos para asistirlo. Póngase en contacto con nuestro equipo especializado.
        </p>

        <div className="contacto-info-grid">
          <div className="contacto-card">
            <div className="contacto-icon">📍</div>
            <h4>Dirección</h4>
            <p>Badajoz 100 Of 512, Las Condes</p>
            <span>Santiago, Chile</span>
          </div>

          <div className="contacto-card">
            <div className="contacto-icon">✉️</div>
            <h4>Atención y Consultas</h4>
            <p>
              <strong>Email:</strong> info@latamrecovery.cl
            </p>
            <p>
              <strong>Teléfono:</strong> +56 9 2774 3766
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}