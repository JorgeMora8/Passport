import mongoose from "mongoose"; 
import { config } from "dotenv";
config()

const uri = process.env.URI
mongoose.connect(uri); 

//=>Contenedor 
export default class Contenedor{ 
    constructor(schema){ 
        this.schema = schema
    }

    async guardarMensaje(objeto) {
        const MensajesGuardados = await this.obtenerMensajes()
        const id = !MensajesGuardados.length ? 1 : parseInt(MensajesGuardados[MensajesGuardados.length - 1].id) + 1
        //=>Se agrega un ID
        objeto.id = id.toString()
        await this.schema.create(objeto);
      };

      async obtenerMensajes() {
        return await this.schema.find({}, { _id: 0, __v: 0 }).lean();
      };

      async obtenerUsuarioPorNombre(userName){ 
        try {
          const usuario = this.schema.findOne({username:userName}, {_id:0, __v:0}); 
          if(usuario == null){ 
            throw new Error
          }
          return usuario
        } catch (error) {
          console.log(error)
        }
        
      }

      async obtenerUsuarioPorId(idUsuario){ 
        try {
         let usuario = await this.schema.findOne({id:idUsuario}, {_id:0, __v:0}); 
          if(!usuario){ 
            throw new Error("No se consiguio usuario en metodo [obtenerusuarioporid]")
          }
          console.log(usuario)
          return usuario
        } catch (error) {
          console.log(error)
        }
      }

      async guardarUsuario(DatosUsuario, password){ 
        try {
          await this.schema.create({username:DatosUsuario.username, password:password, id:DatosUsuario.id, location:DatosUsuario.location, phoneNumber:DatosUsuario.phoneNumber, age:DatosUsuario.age, name:DatosUsuario.name});
        } catch (error) {
          console.log(error)
        }
      }

      async obtenerTodosLosUsuario(){ 
        try {
          return await this.schema.find({}, {_id:0, __v:0}).toArray(); 
        } catch (error) {
          throw new Error(error)
        }
      }

      async guardarProductoCarrito(producto){ 

        const obj = producto[0]
      

        try {
          return await this.schema.create({ id_producto: obj.id_producto, nombre: obj.nombre, precio: obj.precio, imagen:obj.imagen, tipo_producto: obj.tipo_producto})
        } catch (error) {
          throw new Error("Hubo un error en el proceso de insertar el producto: " + error)
        }
      }

      async obtenerTodosProductosCarrito(){
        try {
          return await this.schema.find({}, { _id: 0, __v: 0 }).lean();
        } catch (error) {
          throw new Error("Hubo un error en el proceso de traer todos los usuarios: " + error)
        }
      }

      async eliminarProductosCarrito(idObtenido){ 
        try {
          return await this.schema.deleteOne({id_producto: idObtenido})
        } catch (error) {
          throw new Error("Hubo un error en el proceso de traer todos los usuarios: " + error)
        }
      }

      async limpiarCarrito(){
        try {
          return await this.schema.deleteMany({})
        } catch (error) {
          console.log(error)
        }
      }


      async obtenerPrecioTotal(){
        let productosEnCarrito = await this.obtenerTodosProductosCarrito()

        let total= 0
    
         productosEnCarrito.forEach((producto) => { 
            let num = Number(producto.precio)
            total += num
        })


        return total
      }


      //=>Nuevas functiones. Obtener/seleccionar/eliminar.
      async obtenerProductos (){ 
        try {
          return await this.schema.find({}, { _id: 0, __v: 0 })
        } catch (error) {
          console.log(error)
        }
      }

      async obtenerProductoPorId(id){ 
        try {
          return await this.schema.find({id_producto: id}, {_id:0, __v:0})
        } catch (error) {
          console.log(error)
        }
      }

      async agregarProductoStock(producto, id){ 
        return this.schema.create({id_producto: id, nombre: producto.nombre, precio:producto.precio, imagen:producto.imagen  ,tipo_producto: producto.tipo_producto})
      }

    };

