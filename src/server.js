//=>Importaciones
import {app} from "../app/app.js";
import http from "http";
import { Server } from "socket.io";
import { normalize } from "normalizr";
import {ClienteMysql} from "../ContenedorMYSQL/ClienteMysql.js";
import {chatContenedor} from "../ContenedorMongoDB/DAOMongo.js";
import {messageSchema} from "../normalizr/NormalizrSchema.js";


const PORT = 5000;
const httpServer = http.createServer(app);
const io = new Server(httpServer);

//=>Inicializacion de server
const server = httpServer.listen(PORT, () => {
  console.log("Usando el puerto: " + PORT);
});
server.on("error", (err) => {
  console.log(err);
});

//=>Importacion de Routers
import {AuthRouter} from "../router/authRouter.js"; 
import {HomeRoot} from "../router/root.js";


//=>Instalacion de Routers
app.use("/auth", AuthRouter); 
app.use("/", HomeRoot)

//=>Chat Socket.Io
io.on("connection", async (socket) => {
  socket.emit("productos", await ClienteMysql.ObtenerProductos());
  socket.emit(
    "chat",
    normalize(await chatContenedor.obtenerMensajes(), [messageSchema])
  );

  socket.on("nuevoProducto", async (data) => {
    await ClienteMysql.Guardar(data);
    io.sockets.emit("productos", await ClienteMysql.ObtenerProductos());
  });

  socket.on("nuevoMensaje", async (data) => {
    await chatContenedor.guardarMensaje(data);
    io.sockets.emit(
      "chat",
      normalize(await chatContenedor.obtenerMensajes(), [messageSchema])
    );
  });
});
