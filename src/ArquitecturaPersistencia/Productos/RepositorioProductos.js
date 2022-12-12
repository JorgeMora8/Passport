import Producto from "./Productos.js";

export class RepositorioProductos { 
    constructor(dao){ 
        this.dao = dao; 
    }

    async guardar(producto){ 
        let datosProducto = producto.asDTO(); 
        await this.dao.guardar(datosProducto);
        return datosProducto
    }

    async obtener(){ 
        let datosProductosGuardados = await this.dao.obtenerTodos(); 
        return datosProductosGuardados.map(prodGuardado => new Producto(prodGuardado))
    }

    async obtenerPorId(idObtenido) { 
        let productoObtenido = await this.dao.obtenerPorId(idObtenido); 
        return new Producto(productoObtenido); 
    }
}