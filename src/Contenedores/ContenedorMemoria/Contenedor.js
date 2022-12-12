export default class ContenedorMemoria { 
    constructor(){ 
        this.contenedor = []; 
    }


    async obtenerTodos(){ 
        return this.contenedor; 
    }

    async obtenerPorNombre(NamedAdded){ 
        let item = this.contenedor.find(item => { 
            return item.name === NamedAdded; 
        })
        return item
    }

    async obtenerPorId(id){ 
        let item = this.contenedor.find(item => { 
            item.id === id; 
        })
        return item
    }

    async eliminarPorId(id){ 
        let nuevoContenedor = this.contenedor.filter(item => { 
            return item.id !== id; 
        })
        this.contenedor = nuevoContenedor
    }

    async guardar(datos){ 
        this.contenedor.push(datos); 
        return datos; 
    }

    async eliminarDatos(){ 
        this.contenedor = []; 
    }

}