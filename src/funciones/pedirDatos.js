import productos from "../data/productos";
export const pedirDatos = () =>{

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(productos);
        },400)
    })
     
}
