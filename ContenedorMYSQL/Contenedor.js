import knex from "knex"


export default class ContenedorMysql { 
    constructor(config){ 
        this.knex = knex(config)
    }

    crearTabla() {
      return this.knex.schema.hasTable("productos").then((data) => { 
        if(!data){ 
          this.knex.schema.createTable("productos", (tabla) => { 
            tabla.increments('id'),
                    tabla.string('nombre'),
                    tabla.integer('precio')
                    tabla.string("imagen")
          })
        }
      }).catch((err) => { 
        console.log(err)
      })
    }
    
      Guardar(producto) {
        return this.knex("articulos").insert(producto);
      }
    
      ObtenerProductos() {
        return this.knex.select("*").from("articulos");
      }
    
      ObtenerPorId(idObtenido) {
        return this.knex("articulos").select("*").where("id_producto", idObtenido).first();
      }
    
      EliminarPorId(id) {
        const producto = this.getById(id);
    
        if (Object.entries(producto).length < 0) {
          return false;
        }
    
        this.knex("articulos").where("id_producto", id).del();
    
        return true;
      }
    
      ActualizarProducto(objeto, id) {
        return this.knex("articulos").where("id_producto", id).update(objeto);
      }

      buscarProductosPorGrupo(tipo){ 
        return this.knex("articulos").select("*").where("tipo_producto", tipo);
      }


      agregarProductosCarrito(datosProducto){ 
        return this.knex("carrito").insert(datosProducto);
      }

      eliminarProductosCarrito(id) {
        return this.knex("carrito").delete("*").where({"id_producto": id})
      }
      
      productosEnCarrito(){ 
        return this.knex.select("*").from("carrito");
      }
    
      close() {
        this.knex.destroy();
      }
}
