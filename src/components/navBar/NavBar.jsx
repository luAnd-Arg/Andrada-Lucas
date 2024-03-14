import { Link, NavLink } from "react-router-dom";
import Carrito from "../../components/cart/Carrito";
import React from "react";
import "./NavBar.css"; // Importamos el archivo de estilos CSS

const NavBar = () => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/"><h1>Pañalera LMA</h1></NavLink>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" exact to="/">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/productos">Productos</NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  to ="/productos" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categorias
            </a>
            <ul className="dropdown-menu dropdown-menu-columns">
              <li><Link className="dropdown-item" to="/productos/bebés">Bebés</Link></li>
              <li><Link className="dropdown-item" to="/productos/recién nacidos">Recién nacidos</Link></li>
              <li><Link className="dropdown-item" to="/productos/niños">Niños</Link></li> 
              <li><Link className="dropdown-item" to="/productos/mayores">Mayores</Link></li>
              <li><Link className="dropdown-item" to="/productos/adultos">Adultos</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/tienda">Tienda</NavLink>
          </li>
      <Carrito/>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
