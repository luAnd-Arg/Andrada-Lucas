import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return(
        <div className="item">
            <img className="imgItem" src={producto.imagen} alt={producto.nombre} />
            <h2 className="nombre">nombre: {producto.nombre}</h2>
            <h3 className="precio">$ {producto.precio}</h3>
            <h4 className="detalle">{producto.detalle}</h4>
            <h5 className="categoria">{producto.categorias}</h5>
            <Link className="verMas" to={`/item/${producto.id}`} > ver más </Link>
        </div>
    )
}
    export default Item;
     
