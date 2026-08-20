import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Estilos de Swiper obligatorios
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importación de las 9 imágenes
import c1 from "../assets/clientes/1.png";
import c2 from "../assets/clientes/2.png";
import c3 from "../assets/clientes/3.png";
import c4 from "../assets/clientes/4.png";
import c5 from "../assets/clientes/5.png";
import c6 from "../assets/clientes/6.png";
import c7 from "../assets/clientes/7.png";
import c8 from "../assets/clientes/8.png";
import c9 from "../assets/clientes/9.png";

const clientes = [
  { id: 1, logo: c1, alt: "Mercado Crédito" },
  { id: 2, logo: c2, alt: "GarantíaYa" },
  { id: 3, logo: c3, alt: "Presta Cash" },
  { id: 4, logo: c4, alt: "Flex" },
  { id: 5, logo: c5, alt: "Habitat" },
  { id: 6, logo: c6, alt: "Credipaz" },
  { id: 7, logo: c7, alt: "Credicuotas" },
  { id: 8, logo: c8, alt: "Soma" },
  { id: 9, logo: c9, alt: "Waynimóvil" },
];

export default function Clientes() {
  return (
    <section id="clientes" className="clientes">
      <div className="container">
        <h2 className="section-title">
          <strong>NUESTROS</strong> CLIENTES
        </h2>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          slidesPerGroup={5}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2, slidesPerGroup: 2 },
            640: { slidesPerView: 3, slidesPerGroup: 3 },
            1024: { slidesPerView: 5, slidesPerGroup: 5 },
          }}
          className="clientes-swiper"
        >
          {clientes.map((c) => (
            <SwiperSlide key={c.id}>
              <div className="cliente-slide-item">
                <img src={c.logo} alt={c.alt} className="cliente-img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}