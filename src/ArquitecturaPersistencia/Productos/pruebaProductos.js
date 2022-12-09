import ServicioProductos from "./ServicioProductos.js";

const producto1 = {
    name:"Sony Headphones", 
    price:340, 
    image:"https://th.bing.com/th/id/OIP.5Y3EeyY6LrhjTMkYkTtgmwAAAA?pid=ImgDet&rs=1", 
    type_of_product: "headpohone"
}

// console.log(producto1)

export const ProdServicio = new ServicioProductos()

// await ProdServicio.guardarProducto(producto1)

console.log(await ProdServicio.obtenerProductos())