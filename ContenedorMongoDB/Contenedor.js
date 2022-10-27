const mongoose = require("mongoose"); 
const uri = "mongodb://localhost:27017"; 

mongoose.connect(uri); 


//=>Contenedor de mensajes usango MongoDB
class Contenedor{ 
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

      async obtenerUsuarioPorNombre(user){ 
        try {
          const usuario = await this.schema.findOne({username:user}, {_id:0, __v:0})
          if(!usuario){ 
            return null
          }
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

      async guardarUsuario(DatosUsuario){ 
        try {
          await this.collection.create({username:DatosUsuario.username, password:DatosUsuario.password, id:DatosUsuario.password});
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


    };

module.exports = Contenedor