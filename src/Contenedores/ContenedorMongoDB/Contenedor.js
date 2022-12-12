import mongoose from "mongoose"; 
import {mongoLink} from "../../Configuration/EnviromentVariables.js"
import { config } from "dotenv";
config()

// const uri = process.env.URI
try {
  await mongoose.connect(mongoLink);  
} catch (error) {
  console.log("Hubo un error en la conexion de codigo. " + error)
}

//=>Contenedor 
export default class Contenedor{ 
    constructor(schema){ 
        this.schema = schema
    }

    async obtenerTodos() { 
      return await this.schema.find({}, { _id: 0, __v: 0 }).lean();
    }

    async obtenerPorNombre(NameAdded){
      try {
        const item = this.schema.findOne({name:NameAdded}, {_id:0, __v:0}); 
        if(item == null){ 
          throw new Error
        }
        return item
      } catch (error) {
        console.log(error)
      }
     }

    async obtenerPorId(Id){
      try {
        const item = await this.schema.findOne({id:Id}, {_id:0, __v:0}); 
        if(item == null){ 
          throw new Error
        }
        return item
      } catch (error) {
        console.log(error)
      }
     }

     async eliminarPorId(Id) { 
      try {
        return await this.schema.deleteOne({id: Id})
      } catch (error) {
        throw new Error("Hubo un error en el proceso de traer todos los usuarios: " + error)
      }
     }

     async guardar(datos){ 
      console.log(datos, "contenedor")
      try {
          await this.schema.create(datos);
      } catch (error) {
        console.log(error)
      }
      console.log(datos, "contenedo")
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

      async eliminarDatos(){
        try {
          return await this.schema.deleteMany({})
        } catch (error) {
          console.log(error)
        }
      }

    };