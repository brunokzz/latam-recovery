import { Routes, Route } from "react-router-dom";
import "./styles/variables.css";
import "./styles/app.css";

import ScrollToTop from "./components/ScrollToTop"; // Importa el componente
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ServicioDetalle from "./components/ServicioDetalle";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/latam-recovery" element={<Home />} />
          <Route path="/latam-recovery/servicio/:slug" element={<ServicioDetalle />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}