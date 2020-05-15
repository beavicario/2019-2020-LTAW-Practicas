
const http = require('http');
const PUERTO = 8080

console.log("Arrancando servidor...")

//-- Configurar el servidor. Cada vez que llegue una peticion se emite un
//-- evento y se invoca a la funcion server_req()
server = http.createServer(server_req)

//-- Funcion de retrollamada de servicio de las peticiones
//-- No se devuelve mensaje, se indica en consola que ha llegado
//-- una peticion
function server_req(req, res) {
  console.log("---> Peticion recibida")
}

//-- Queremos que el servidor escuche peticiones en puerto 8080
server.listen(PUERTO);

console.log("Puerto: " + PUERTO)

// Servidor básisco.
// No responde PETICIONES, indica cuando llega una.
