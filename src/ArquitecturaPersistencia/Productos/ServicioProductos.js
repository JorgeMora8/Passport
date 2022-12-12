import Producto from "./Productos.js"; 
import { ContenedorProductos} from "../../Contenedores/DAO.js";
import {RepositorioProductos} from "./RepositorioProductos.js"
import { obtenerId } from "../../recurso/models/IdModel.js";



export default class ServicioProductos { 
    constructor(){ 
        this.RepositorioProductos = new RepositorioProductos(ContenedorProductos)
    }

    async guardarProducto(datosProducto){ 

        const producto = 
            new Producto({
                name : datosProducto.name, 
                price : datosProducto.price, 
                image : datosProducto.image, 
                type_of_product : datosProducto.type_of_product, 
                id: obtenerId(), 
                brand: datosProducto.brand    
            })
       

        await this.RepositorioProductos.guardar(producto); 
        return producto; 
       
    }

    async obtenerProductos(){ 
        const productosGuardados = await this.RepositorioProductos.obtener(); 
        return productosGuardados.map(prod => prod.asDTO());
    }

    async obtenerProductoPorId(id){ 
        const productoGuardado = await this.RepositorioProductos.obtenerPorId(id); 
        return productoGuardado.map(prod => prod.asDTO());
    }
}