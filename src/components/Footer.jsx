export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col">
          {/* TODO: logo de Latam Recovery */}
          <h4>LATAM RECOVERY</h4>
          <p>Brindamos servicio de excelencia con solidez y liderazgo.</p>
          <p>
            {/* TODO: confirmar dirección definitiva */}
            Badajoz 100 Of 512, Las Condes, Santiago
            <br />
            Teléfono: +56927743766
            <br />
            LATAM RECOVERY SPA
            <br />
            RUT: 77.959.219-7
            <br />
            Email: info@latamcollect.com.ar
          </p>
        </div>

        <div className="footer-col">
          <h5>Servicios</h5>
          <ul>
            <li>
              <a href="#servicios">Gestión Extra Judicial</a>
            </li>
            <li>
              <a href="#servicios">Gestión Judicial</a>
            </li>
            <li>
              <a href="#servicios">Auditorías de Gestión</a>
            </li>
            <li>
              <a href="#servicios">Consultorías de Cobranzas</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Nosotros</h5>
          <ul>
            <li>
              <a href="#valores">Valores</a>
            </li>
            <li>
              <a href="#tecnología">Tecnología</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <small>
            LATAM RECOVERY SPA © {year}
          </small>
        </div>
      </div>
    </footer>
  );
}
