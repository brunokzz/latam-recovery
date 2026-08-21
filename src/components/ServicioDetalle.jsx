import { useParams, Link, Navigate } from "react-router-dom";
import { serviciosData } from "../data/servicios";

export default function ServicioDetalle() {
  const { slug } = useParams();
  const servicio = serviciosData[slug];

  // Si la ruta no existe en nuestros datos, redirige al Home
  if (!servicio) {
    return <Navigate to="/latam-recovery" replace />;
  }

  return (
    <section className="servicio-detalle-page">
      <div className="container">
        <div className="servicio-detalle-grid">
          {/* Columna Izquierda: Imagen */}
          <div className="servicio-detalle-img-col">
            <div className="servicio-detalle-img-wrapper">
              <img src={servicio.imagen} alt={servicio.titulo} />
            </div>
          </div>

          {/* Columna Derecha: Contenido */}
          <div className="servicio-detalle-info-col">
            <nav className="breadcrumb">
              <Link to="/latam-recovery">Inicio</Link> / <span>Sin categorizar</span> / <strong>{servicio.titulo}</strong>
            </nav>

            <h1 className="servicio-detalle-title">{servicio.titulo}</h1>

            <div className="servicio-detalle-texto">
              {servicio.parrafos.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}