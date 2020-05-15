
const http = require('http');
const url = require('url');
const PUERTO = 8080

//-- Configurar el servidor
http.createServer( (req, res) => {
  console.log("---> Peticion recibida")
  console.log("Recurso solicitado (URL): " + req.url)

  //-- Analisis de la URL recibida:
  let q = url.parse(req.url, true);

  console.log("Pathname: " +  q.pathname)
  console.log("search: " + q.search)
  console.log("Búsqueda:")
  let qdata = q.query
  console.log(qdata)

  //-- Acceso al objeto
  console.log("Artículo: " + qdata.articulo)
  console.log("Color: " + qdata.color)

}).listen(PUERTO);

console.log("Servidor corriendo...")
console.log("Puerto: " + PUERTO)

// Host == http://localhost:8080.
// Ruta 'pathname' == /mitienda/listados.html.
// Búsqueda == 'etiqueta=valor' -< separamos búsquedas con cáracter '&'.
// Analizamos cualquier URL y obtenemos los campos por separado.

// EJEMPLO: $ curl "localhost:8080/busqueda?articulo=pen&color=rojo".
// Búsqueda == 'articulo=pendrive&color=blanco'.
  // ---> Peticion recibida
  // Recurso solicitado (URL): /busqueda?articulo=pen&color=rojo
  // Pathname: /busqueda
  // search: ?articulo=pen&color=rojo
  // Búsqueda:
  // [Object: null prototype] { articulo: 'pen', color: 'rojo' }
    // Artículo: pen
    // Color: rojo
