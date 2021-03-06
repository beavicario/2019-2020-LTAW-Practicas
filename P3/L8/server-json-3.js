
///-- Modulos utilizados
const http = require('http');
const url = require('url');
const fs = require('fs');

//-- Puerto donde recibir las peticiones
const PUERTO = 8080;

//-- Array con los productos disponibles en la tienda
//-- Usamos un array, pero podría ser un objeto genérico
//-- Por simplicidad lo inicializamos con valores constantes, pero
//-- en una aplicación real este array se obtendría de la base
//-- de datos
let productos = ["FPGA-1", "RISC-V", "74ls00", "FPGA-2", "74ls01", "AVR", "Arduino-UNO"];

//-- Funcion para atender a una Peticion
//-- req: Mensaje de solicitud
//-- res: Mensaje de respuesta
function peticion(req, res) {
  //-- Mostrar en la consola el recurso al que se accede
  const q = url.parse(req.url, true);
  console.log("Petición: " + q.pathname);

  //-- Segun el recurso al que se accede
  switch (q.pathname) {

    //-- Pagina principal
    case "/":
      fs.readFile("./index.html", (err, data) => {
        //-- Generar el mensaje de respuesta
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        return
      });
      break;

    //-- Fichero js cliente
    case "/client-2.js":
      fs.readFile("./client-2.js", (err, data) => {
        //-- Generar el mensaje de respuesta
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        res.write(data);
        res.end();
        return
      });
      break;


  //-- Acceso al recurso JSON
      case "/myquery":

        //-- Leer los parámetros recibidos en la peticion
        const params = q.query;

        //-- No hacemos nada con ellos, simplemente los mostramos en
        //-- la consola
        console.log("Parametros: " +params.param1 + ' y ' + params.param2);

        //-- El array de productos lo pasamos a una cadena de texto,
        //-- en formato JSON:
        content = JSON.stringify(productos) + '\n';

        //-- Generar el mensaje de respuesta
        //-- IMPORTANTE! Hay que indicar que se trata de un objeto JSON
        //-- en la cabecera Content-Type
        res.setHeader('Content-Type', 'application/json')
        res.write(content);
        res.end();
        return
        break

    //-- Se intenta acceder a un recurso que no existe
    default:
      content = "Error";
      res.statusCode = 404;
      //-- Generar el mensaje de respuesta
      res.setHeader('Content-Type', 'text/html')
      res.write(content);
      res.end();
  }

}

//-- Inicializar el servidor
//-- Cada vez que recibe una petición
//-- invoca a la funcion peticion para atenderla
const server = http.createServer(peticion)

//-- Configurar el servidor para escuchar en el
//-- puerto establecido
server.listen(PUERTO);

console.log("Servidor LISTO!")
console.log("Escuchando en puerto: " + PUERTO)
