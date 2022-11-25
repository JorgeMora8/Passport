
import { Schema, model, mongoose, mongo} from "mongoose"; 

const mensajeSchema = new mongoose.Schema({ 
   id: String,
   author: Object,
   message: String,
})

const usuariosSchema = new mongoose.Schema({
   username:String, 
   password:String, 
   id:String, 
   name:String, 
   phoneNumber:String, 
   age:String,
   location:String,

})

const productoSchema = new mongoose.Schema({
   id_producto: { type:String, required:true},
   nombre: { type:String, required:true},
   precio: { type:String, required:true},
   imagen: { type:String, required:true},
   tipo_producto: { type:String, required:true},
})




const mensajeModel = mongoose.model("chat", mensajeSchema);
const usuarioModel = mongoose.model("sessionUsuarios", usuariosSchema);
const carritoProductoModel = mongoose.model("carrito", productoSchema);
const productoModel = mongoose.model("productos", productoSchema);

export { 
   mensajeModel, 
   usuarioModel, 
   carritoProductoModel, 
   productoModel
}
