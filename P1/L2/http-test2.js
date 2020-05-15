
const http = require('http');
const PUERTO = 8080

console.log("Arrancando servidor...")

//-- Configurar el servidor. Cada vez que llegue una peteicion
//-- se notifica en la consola
server = http.createServer( (req, res) => {
  console.log("---> Peticion recibida")
});

//-- Queremos que el servidor escuche peticiones en puerto 8080
server.listen(PUERTO);

console.log("Puerto: " + PUERTO)

// SIMPLIFICAMOS CÓDIGO.

// Incluimos la función de retrollamada dentro del argumento 'createServer'.
// No es necesaria la función server_req().
