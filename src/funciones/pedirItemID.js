import productos from "../data/productos"
export const pedirItemID = (id) =>{
    return new Promise((resolve, reject) => {
        const item = productos.find((elemento) => elemento.id === id)
        if(item){
            resolve (item)
        } else{
            reject (
                {
                    error : "error"
                }
            )
        }
    })
}