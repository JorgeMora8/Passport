const express = require("express"); 
const {Server:HttpServer} = require("http"); 
const {Server:IOServer} = require("socket.io"); 
const {schema, normalize} = require("normalizr")
const session = require("express-session") 


const app = express(); 
const httpServer = new HttpServer(app); 
const io = new IOServer(httpServer); 
const configSession = require("../config/configDATA.js")
const {passportMiddleware, passportSessionHanlder} = require("../middleware/passport.js")

app.use(express.static("public")); 
app.use(express.urlencoded({extended:true})); 
app.use(express.json());
app.use(session(configSession))
app.use(passportMiddleware); 
app.use(passportSessionHanlder)

const handlebarsConfig = {defaultlayout: "main.handlebars"}
const {engine} = require("express-handlebars"); 
app.engine("handlebars", engine(handlebarsConfig)); 
app.set("view engine", ".handlebars"); 
app.set("views", "./views");

const productosRouter = require("../router/Productos_test.js")
app.use("/api/productosTest", productosRouter)







module.exports = app