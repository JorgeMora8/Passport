//=>Productos Faker
import faker from "faker";

export function agregarProductosFaker() { 

    let listaProductos = [];

    for(let p=0; p<=5; p++){
        let producto = {
            nombre: faker.commerce.product(), 
            precio: faker.commerce.price(), 
            imagen: faker.image.business()
        }
        
        listaProductos.push(producto)
    }

    return listaProductos
}


