import { obtenerId } from "./IdModel.js";

export function crearProducto({name, price, image, type_of_product}){ 
    if(!name) throw new Error ("No hay nombre para el producto"); 
    if(!price) throw new Error ("No se agrego un precio determinado"); 
    if(!image) throw new Error ("No se agrego una imagen")
    if(!type_of_product) throw new Error ("No se asigno un tipo de producto"); 

    return { 
        name, 
        price, 
        image, 
        type_of_product,
        id:obtenerId()
    }
}