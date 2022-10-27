
import { Schema, model, mongoose} from "mongoose"; 

const mensajeSchema = new mongoose.Schema({ 
   id: String,
   author: Object,
   message: String,
})

const usuariosSchema = new mongoose.Schema({
   username:String, 
   password:String, 
   id:String
})


const mensajeModel = mongoose.model("chat", mensajeSchema)
const usuarioModel = mongoose.model("sessionUsuarios", usuariosSchema)

export { 
   mensajeModel, 
   usuarioModel
}
