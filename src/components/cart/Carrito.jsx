import { Link } from "react-router-dom";
import React from "react";

const imgCarrito = 'https://cdn.icon-icons.com/icons2/1077/PNG/512/shoppingcart_77968.png';

const Carrito = () => (
  <div className="carrito">
    <Link to="/carrito">
      <img className="imagenCarrito" src={imgCarrito} alt="Carrito de compras" />
    </Link>
    <span>1</span>
    <h3>Soy el carrito</h3>
  </div>
);

export default Carrito;
