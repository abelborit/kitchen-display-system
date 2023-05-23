const http = require("http");

const server = http.createServer();

/* integración de socket.io con este server, y esto devuelve un método el cual le tenemos que pasar como parámetro el servidor con el cual vamos a interactuar, luego tiene un objeto de configuración para dar el acceso al cors, en este caso vamos a hacer que todos puedan hacer peticiones  */
const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

/* capturar los eventos */
/* suscribirse a eventos, en este caso será connection y nos da la función del socket por el cual nos vamos a conectar, y este evento connection se va a lanzar cuando cualquier cliente/navegador se conecte a nuestro servidor. El socket es el canal de comunicación que vamos a tener entre el navegador y el servidor entonces con este socket podríamos enviar eventos que luego capturaríamos desde el front y viceversa (mandar desde el front y en el server capturar esos eventos) */
io.on("connection", (socket) => {
  console.log("Se ha conectado un cliente");

  socket.on("forceDisconnect", function () {
    console.log("Se ha desconectado un cliente");
    socket.disconnect();
  });

  /* suscribirme al evento para recepcionar la información enviada desde el frontend: socket.on(nombre_evento, datos_del_evento) */
  socket.on("sendInfo", (data) => {
    /* leer la data */
    console.log(data);
    /* hacer un reenvío de lo que se mandó desde el frontend a todos los usuarios conectados a este server. Es como por ejemplo, desde el frontend de envió una data determianda al backend y una vez que llegó al backend entonces este la vuelve a enviar al frontend a todos los usuarios conectados a este server, incluso también al que mandó la data. Entonces ahora como se está mandando data desde el backend, en el frontend tenemos que volver a suscribirnos para poder recibir esa data otra vez */
    io.emit("sendInfo", data);
  });
});

server.listen(5175);
