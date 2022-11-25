//=>Importaciones
import { app } from "../app/app.js";
import http from "http";
import { Server } from "socket.io";
import { normalize } from "normalizr";
import { chatContenedor, ContendorUsuarios, ContenedorProductos } from "../ContenedorMongoDB/DAOMongo.js";
import { messageSchema } from "../normalizr/NormalizrSchema.js";
import { enviarProductosCompra } from "../twilio/WhatsApp.js";
import { enviarCorreoCompra } from "../twilio/Gmail.js";
import { ContenedorCarrito } from "../ContenedorMongoDB/DAOMongo.js";
import {renderizarProductos} from "../recurso/renderizarMensaje.js"; 
import {obtenerId} from "../models/IdModel.js"

//=>Importacion de loggers;
import { loggerError, loggerInfo } from "../loggeo/loggeoConfig.js";

//=>Importacion de Routers
import { AuthRouter } from "../router/authRouter.js";
import { HomeRoot } from "../router/root.js";
import { infoRouter } from "../router/infoRouter.js";
import { RandomNumberRouter } from "../router/RandomNumber.js";
import { router } from "../router/Productos_test.js";
import { productosRouter } from "../router/productosRouter.js";
import { carritoRouter } from "../router/carritoRouter.js";

//=>Instalacion de Routers
app.use("/auth", AuthRouter);
app.use("/info", infoRouter);
app.use("/", HomeRoot);
app.use("/api", RandomNumberRouter);
app.use("/productosFaker", router);
app.use("/tipoProductos", productosRouter);
app.use("/carrito", carritoRouter);

import { paginaNoEncontrada } from "../Controllers/paginaNoEncontrada.js";
app.get("*", paginaNoEncontrada);

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

  //=>Chat Socket.Io

  io.on("connection", async (socket) => {
     socket.emit("productos", await ContenedorProductos.obtenerProductos());

    socket.emit(
      "productosCarrito",
      await ContenedorCarrito.obtenerTodosProductosCarrito()
    );

    socket.emit(
      "chat",
      normalize(await chatContenedor.obtenerMensajes(), [messageSchema])
    );

    socket.on("nuevoProducto", async (data) => {

     await ContenedorProductos.agregarProductoStock(data,obtenerId() ); 
     loggerInfo.info(`Producto agregado: ${data.nombre}`)
     io.sockets.emit("productos", await ContenedorProductos.obtenerProductos());


    });

    socket.on("nuevoMensaje", async (data) => {
      await chatContenedor.guardarMensaje(data);
      loggerInfo.info(`Ingreso de nuevo mensaje. ${data} `);
      io.sockets.emit(
        "chat",
        normalize(await chatContenedor.obtenerMensajes(), [messageSchema])
      );
    });

    socket.on("idNuevoProductoCarrito", async (idProducto) => {

      const productoEncontrado = await ContenedorProductos.obtenerProductoPorId(idProducto)

      console.log(productoEncontrado)
      await ContenedorCarrito.guardarProductoCarrito(productoEncontrado)
      console.log("Producto agregado")
    });

    socket.on("ProdutoEliminarCarrito", async (data) => {
      await ContenedorCarrito.eliminarProductosCarrito(data);
    });

    socket.on("compra", async (data) => {
      let productosEnCarrito = await ContenedorCarrito.obtenerTodosProductosCarrito();
      let precioCarritoTotal = await ContenedorCarrito.obtenerPrecioTotal();
    
    let mensaje = renderizarProductos(productosEnCarrito)

    let usuario = await ContendorUsuarios.obtenerUsuarioPorNombre(data); 
   

      await enviarCorreoCompra("Compra de productos.", mensaje, usuario.username); 
      await enviarProductosCompra(usuario.phoneNumber, mensaje, precioCarritoTotal)
      await ContenedorCarrito.limpiarCarrito()
    });
  });

  server.on("error", (error) => {
    loggerError.error(error);
  });
}

