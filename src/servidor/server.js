//=>Importaciones
import { app } from "./app.js";
import http from "http";
import { Server } from "socket.io";

//=>Importacion de loggers;
import { loggerError } from "../test/loggeo/loggeoConfig.js";
import { generarCompra } from "../socketController/SC_compraController.js";

import {ProdServicio} from "../ArquitecturaPersistencia/Productos/instanciaProductos.js"; 
import {menServicio} from "../ArquitecturaPersistencia/Mensajes/instanciaMensajes.js"; 
import {carService} from "../ArquitecturaPersistencia/Carritos/instanciaCarrito.js"


export default function crearServidor(port) {
  const httpServer = http.createServer(app);
  const server = httpServer.listen(port, () => {
    console.log(
      `Servidor de express ${process.pid} esta ejecutandose en el puerto ${port}`
    );
  });

  const io = new Server(httpServer);

io.on("connection", async (socket) => {
     
    socket.emit("productos", await ProdServicio.obtenerProductos());
    socket.emit("productosCarrito", await carService.obtenerProductosEnCarrito());
    socket.emit("chat",  await menServicio.obtenerMensajes());

    socket.on("nuevoProducto", async (data) => {
      await ProdServicio.guardarProducto(data)
      io.
      sockets.
      emit("productos", await ProdServicio.obtenerProductos())
     });

    socket.on("nuevoMensaje", async (data) => {
      await menServicio.guardarMensaje(data)
       io.
       sockets.
       emit("chat", await menServicio.obtenerMensajes());
     });

    socket.on("compra", async (data) => await generarCompra(data) );
    socket.on("ProdutoEliminarCarrito", async (idProducto) => await carService.eliminarProductoEnCarrito(idProducto));
    
    socket.on("idNuevoProductoCarrito", async (idProducto) => {
    await carService.guardarEnCarrito(idProducto)
  });
  });


  server.on("error", (error) => {
    loggerError.error(error);
  });
}

