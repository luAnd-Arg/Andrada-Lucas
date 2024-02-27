import React from "react";
import Carrito from "../cart/Carrito";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap desde el paquete npm

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Utilizar clases de Bootstrap para la navegación */}
    <div className="container">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">¿Quiénes Somos?</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Productos
            </a>
            <div className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Pañales</a>
              <a className="dropdown-item" href="#">Apositos</a>
              <a className="dropdown-item" href="#">Protector de camas</a>
              <a className="dropdown-item" href="#">Nebulizadores</a>
              <a className="dropdown-item" href="#">Perfumeria</a>
              <a className="dropdown-item" href="#">Insumos medicos</a>
              <a className="dropdown-item" href="#">Articulos varios</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Tienda</a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#"><Carrito/></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
