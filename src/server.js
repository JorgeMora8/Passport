const app = require("../app/app.js");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const { schema, normalize } = require("normalizr");
const ClienteMysql = require("../ContenedorMYSQL/ClienteMysql");
const chatContenedor = require("../ContenedorMongoDB/DAOMongo.js");
const messageSchema = require("../normalizr/NormalizrSchema.js");
const PORT = 5000;
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const server = httpServer.listen(PORT, () => {
  console.log("Usando el puerto: " + PORT);
});
server.on("error", (err) => {
  console.log(err);
});



const {AuthRouter} = require("../router/authRouter.js"); 
const {HomeRoot} = require("../router/root.js")


//=>Rutas
app.use("/auth", AuthRouter); 
app.use("/", HomeRoot)


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
