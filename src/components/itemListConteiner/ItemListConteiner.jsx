import { useState, useEffect } from "react";
import { pedirDatos } from "../../funciones/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListConteiner = () => {
  const [productos, setProductos] = useState([]);
  const { categorias } = useParams(); // Aquí obtén las categorías de los parámetros de la URL
  const [titulo , setTitulo ] = useState("Productos")
  console.log(categorias);

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        let productosFiltrados = res;
        if (categorias) {
          productosFiltrados = res.filter((prod) =>
            prod.categorias.includes(categorias)
          );
        }
        setProductos(productosFiltrados);
        setTitulo(categorias);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });

  }, [categorias]);

  return (
    <div className="itemListConteiner">

      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListConteiner;
