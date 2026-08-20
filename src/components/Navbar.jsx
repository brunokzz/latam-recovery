export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <nav className="navbar-left">
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
        </nav>

        <nav className="navbar-right">
          <a href="#clientes">Clientes</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
