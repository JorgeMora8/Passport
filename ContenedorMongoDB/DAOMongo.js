//=>Instalacion de contenedor MongoDB para su conexion y uso para el area de mensajes (DESAFIO NORMALIZR); 
const contenedorMongoDB = require("../ContenedorMongoDB/Contenedor.js"); 
const mensajeSchema = require("./Config/Schema.js")
const usuariosModel = require("./Config/Schema.js")

const chatContenedor = new contenedorMongoDB(mensajeSchema)

const ContendorUsuarios = new contenedorMongoDB(usuariosModel)



module.exports = {
    chatContenedor,
    ContendorUsuarios 
}