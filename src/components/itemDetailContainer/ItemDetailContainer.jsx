import { useEffect, useState } from "react";
import { pedirItemID } from "../../funciones/pedirItemID";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const id = useParams().id;
    console.log(id)

    const [item, setItem] = useState(null);

    useEffect(() => {
        pedirItemID(Number(id))
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.error("Error al obtener el item:", error);
            });
    }, [id]);

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;
