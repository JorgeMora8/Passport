
import { Schema, model, mongoose, mongo} from "mongoose"; 

const mensajeSchema = new mongoose.Schema({ 
   id: String,
   name: Object,
   nickName:String, 
   mail:String,
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
   id: { type:String, required:true},
   name: { type:String, required:true},
   price: { type:String, required:true},
   image: { type:String, required:true},
   type_of_product: { type:String, required:true},
   brand: {type:String, required:true}
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
