import OGhiotto from '../assets/staff/oGhiotto.jpg'
import MGhiotto from '../assets/staff/mGhiotto.jpg'

const staff = [
  {
    name: "CDOR. OMAR GHIOTTO",
    role: "CO-FUNDADOR",
    image: OGhiotto, // <-- Asignamos la imagen importada
    bio: "Contador Público Nacional, con amplia experiencia en el sistema financiero en diferentes Áreas de Instituciones Financieras y Bancarias. Asesor, Capacitador, Consultor y Orador en temas relacionados con Créditos y Cobranzas tanto para el sector público como privado.",
    linkedin: "https://www.linkedin.com/in/omar-osvaldo-ghiotto-14480941/",
  },
  {
    name: "DR. MATÍAS O. GHIOTTO",
    role: "CO-FUNDADOR",
    image: MGhiotto, // <-- Asignamos la imagen importada
    bio: "Abogado especializado en Derecho de Daños y Derecho del Seguro. Especialista en el cobro, recupero y gestión de deudas para compañías nacionales y multinacionales. Asesor, capacitador, consultor y orador en temas relacionados con Créditos y Cobranzas en el sector público y privado.",
    linkedin: "#",
  },
];

export default function Staff() {
  return (
    <section id="staff" className="staff">
      <div className="container">
        <h2 className="section-title">
          <strong>NUESTRO</strong> STAFF
        </h2>
        <div className="staff-grid">
          {staff.map((m) => (
            <div className="staff-card" key={m.name}>
              {/* Reemplazamos el div placeholder por la etiqueta img */}
              <img 
                src={m.image} 
                alt={m.name} 
                className="staff-photo" 
              />
              <div className="staff-info">
                <h4>{m.name}</h4>
                <span className="staff-role">{m.role}</span>
                <p>{m.bio}</p>
                <a href={m.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}