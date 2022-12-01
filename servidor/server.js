//=>Importaciones
import { app } from "./app.js";
import http from "http";
import { Server } from "socket.io";

//=>Importacion de loggers;
import { loggerError } from "../test/loggeo/loggeoConfig.js";
import { generarCompra } from "../src/socketController/SC_compraController.js";

import {Carrito} from "../src/socketController/SC_carritoController.js"
import { chat } from "../src/socketController/SC_chatController.js";
import { productos } from "../src/socketController/SC_productosController.js";

const negocioCarrito = new Carrito()
const negocioChat = new chat();
const negocioProductos = new productos()

//=>Funcion para levantar servidor [CLUSTER / FORK]
//=>Dicha función se encuentra en la carpeta recurso/InicializacionServidor.js
export default function crearServidor(port) {
  const httpServer = http.createServer(app);
  const server = httpServer.listen(port, () => {
    console.log(
      `Servidor de express ${process.pid} esta ejecutandose en el puerto ${port}`
    );
  });

  const io = new Server(httpServer);

io.on("connection", async (socket) => {
     
    socket.emit("productos", await negocioProductos.obtenerProductos());
    socket.emit("productosCarrito", await negocioCarrito.obtenerProductosCarrito());
    socket.emit("chat",  await negocioChat.obtenerMensajes());

    socket.on("nuevoProducto", async (data) => {
       await negocioProductos.agregarProducto(data)
       io.
       sockets.
       emit("productos", await negocioProductos.obtenerProductos())
      });

    socket.on("nuevoMensaje", async (data) => {
     await negocioChat.guardarMensaje(data)
      io.
      sockets.
      emit("chat", await negocioChat.obtenerMensajes() );
    });

    socket.on("compra", async (data) => await generarCompra(data) );
    socket.on("ProdutoEliminarCarrito", async (idProducto) => await negocioCarrito.eliminarProductoCarrito(idProducto));
    socket.on("idNuevoProductoCarrito", async (idProducto) => await negocioCarrito.agregarProductosCarrito(idProducto));
});

  server.on("error", (error) => {
    loggerError.error(error);
  });
}

