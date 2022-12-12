//=>
import contenedorMongoDB from "./ContenedorMongoDB/Contenedor.js";
import {carritoProductoModel, mensajeModel, usuarioModel, productoModel} from "./ContenedorMongoDB/Config/Schema.js";
import ContenedorMemoria from "./ContenedorMemoria/Contenedor.js"; 
import {DDBB} from "../Configuration/minimistConfig.js"


const ContendorUsuarios = new contenedorMongoDB(usuarioModel)

let ContenedorCarrito; 
let ContenedorProductos; 
let chatContenedor; 


switch (DDBB) {
    case "mongo":
         chatContenedor = new contenedorMongoDB(mensajeModel)
         ContenedorCarrito = new contenedorMongoDB(carritoProductoModel)
         ContenedorProductos = new contenedorMongoDB(productoModel); 
      break
    case "memoria":
         chatContenedor = new ContenedorMemoria()
         ContenedorCarrito = new ContenedorMemoria()
         ContenedorProductos = new ContenedorMemoria()
      break
  }




export { 
    chatContenedor, 
    ContendorUsuarios, 
    ContenedorCarrito, 
    ContenedorProductos
}
