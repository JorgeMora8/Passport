//=>Importaciones
import { app } from "../app/app.js";
import http from "http";
import { Server } from "socket.io";
import { normalize } from "normalizr";
import { ClienteMysql } from "../ContenedorMYSQL/ClienteMysql.js";
// import { conection } from "../ContenedorMYSQL/ClienteMysql.js";
// import { Options } from "../ContenedorMYSQL/Options/Options.js";
import { chatContenedor } from "../ContenedorMongoDB/DAOMongo.js";
import { messageSchema } from "../normalizr/NormalizrSchema.js";

//=>Importacion de loggers;
import { loggerError, loggerInfo } from "../loggeo/loggeoConfig.js";

//=>Importacion de Routers
import { AuthRouter } from "../router/authRouter.js";
import { HomeRoot } from "../router/root.js";
import { infoRouter } from "../router/infoRouter.js";
import { RandomNumberRouter } from "../router/RandomNumber.js";
import { router } from "../router/Productos_test.js";

//=>Instalacion de Routers
app.use("/auth", AuthRouter);
app.use("/info", infoRouter);
app.use("/", HomeRoot);
app.use("/api", RandomNumberRouter);
app.use("/productosFaker", router);

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
  
    socket.emit("productos", await ClienteMysql.ObtenerProductos());

    socket.emit(
      "chat",
      normalize(await chatContenedor.obtenerMensajes(), [messageSchema])
    );

    socket.on("nuevoProducto", async (data) => {
      await ClienteMysql.Guardar(data);
      loggerInfo.info(`Ingreso de nuevo producto. ${data} `);
      io.sockets.emit("productos", await ClienteMysql.ObtenerProductos());
    });

    socket.on("nuevoMensaje", async (data) => {
      await chatContenedor.guardarMensaje(data);
      loggerInfo.info(`Ingreso de nuevo mensaje. ${data} `);
      io.sockets.emit(
        "chat",
        normalize(await chatContenedor.obtenerMensajes(), [messageSchema])
      );
    });
  });

  server.on("error", (error) => {
    loggerError.error(error);
  });
}
