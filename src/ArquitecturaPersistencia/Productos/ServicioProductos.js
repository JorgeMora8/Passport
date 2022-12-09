import Producto from "./Productos.js"; 
import { ContenedorProductos} from "../../ContenedorMongoDB/DAOMongo.js";
import {RepositorioProductos} from "./RepositorioProductos.js"
import {randomUUID} from "crypto"



export default class ServicioProductos { 
    constructor(){ 
        this.RepositorioProductos = new RepositorioProductos(ContenedorProductos)
    }

    async guardarProducto(datosProducto){ 
        // console.log(datosProducto)

        const producto = 
            new Producto({
                name : datosProducto.name, 
                price : datosProducto.price, 
                image : datosProducto.image, 
                type_of_product : datosProducto.type_of_product, 
                id: randomUUID()}); 

        await this.RepositorioProductos.guardar(producto); 
        return producto; 
       
    }

    async obtenerProductos(){ 
        const productosGuardados = await this.RepositorioProductos.obtener(); 
        return productosGuardados.map(prod => prod.asDTO());
    }
}