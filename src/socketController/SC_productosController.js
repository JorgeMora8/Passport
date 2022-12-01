import { ContenedorProductos } from "../ContenedorMongoDB/DAOMongo.js";
import { crearProducto } from "../recurso/models/ModelProducto.js";


export class productos { 

    async obtenerProductos(){ 
        let todosLosProductos = await ContenedorProductos.obtenerTodos()
        return todosLosProductos
    }

    async agregarProducto(datosProducto) { 
        try {
            let nuevoProducto = crearProducto(datosProducto);
            console.log(nuevoProducto)
            await ContenedorProductos.guardar(nuevoProducto) 
            } catch (error) {
                console.log(error)
            }
    }
}