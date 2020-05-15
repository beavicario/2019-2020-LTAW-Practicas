
const http = require('http');
const PUERTO = 8080

//-- Configurar el servidor
http.createServer( (req, res) => {
  console.log("---> Peticion recibida")
  console.log("Recurso solicitado (URL): " + req.url)
}).listen(PUERTO);

console.log("Servidor corriendo...")
console.log("Puerto: " + PUERTO)

// 'req.url' -> Introduce la URL indicando que recurso del servidor quiere.
// url por defecto == '/'.
// Recurso solicitado URL dentro de mensaje de solicitud 'createServer' en atributo 'url'.
