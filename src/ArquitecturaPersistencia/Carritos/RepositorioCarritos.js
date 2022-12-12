import Producto from "../Productos/Productos.js";
import Carrito from "./Carritos.js";

export class RepositorioCarrito { 
    constructor(dao){ 
        this.dao = dao; 
    }

    async guardar(datosGuardarCarrito){ 
        let datosObtenidosProducto = datosGuardarCarrito.asDTO(); 
        
        await this.dao.guardar(datosObtenidosProducto);
        return datosObtenidosProducto
    }

    async obtener(){ 
        let datosCarritosGuardados = await this.dao.obtenerTodos(); 
        return datosCarritosGuardados.map(carGuardado => new Carrito(carGuardado))
    }


    async obtenerPorId(idObtenido) {    
        let productoEncontrado = await this.dao.obtenerPorId(idObtenido);
        return new Producto(productoEncontrado)
    }

    async eliminarProductoEnCarrito(idProducto){ 
        await this.dao.eliminarPorId(idProducto)
    }
}