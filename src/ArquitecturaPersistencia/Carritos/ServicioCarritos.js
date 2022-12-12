import Carrito from "./Carritos.js";
import { RepositorioCarrito } from "./RepositorioCarritos.js";
import {ContenedorCarrito, ContenedorProductos} from "../../Contenedores/DAO.js"
import { RepositorioProductos } from "../Productos/RepositorioProductos.js";



export default class ServicioCarrito { 
    constructor(){ 
        this.RepositorioCarrito = new RepositorioCarrito(ContenedorCarrito)
        this.RepositorioProductos = new RepositorioProductos(ContenedorProductos)

    }

        async guardarEnCarrito(idProducto){ 
            let obteniendoDatosProducto = await this.RepositorioProductos.obtenerPorId(idProducto); 
            await this.RepositorioCarrito.guardar(obteniendoDatosProducto) 
        }


    async obtenerProducto(idProducto) { 
        let agregarProducto = await this.RepositorioCarrito.obtenerPorId(idProducto); 
        await this.RepositorioCarrito.guardar(agregarProducto)
    }

    async obtenerProductosEnCarrito(){ 
        const carritosGuardados = await this.RepositorioCarrito.obtener(); 
        return carritosGuardados.map(car => car.asDTO());
    }

    async eliminarProductoEnCarrito(idProductoEliminar){ 
        await this.RepositorioCarrito.eliminarProductoEnCarrito(idProductoEliminar)
    }
}