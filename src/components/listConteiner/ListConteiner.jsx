const ListConteiner = ({titulo , descripcion , imagenProducto , precio}) =>(
    <div className="listConteiner">
            <h2>{titulo}</h2>
            <h3>{descripcion}</h3>
             <img src={imagenProducto} alt="imagen" />
            <h5>{precio}</h5>
        </div>
)
export default ListConteiner;