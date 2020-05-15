
var fs = require('fs');

//-- Leer el fichero test2.txt, que NO existe
fs.readFile('test2.txt', 'utf8', (err, data) => {
    console.log("---> Comienzo del fichero leido")
    console.log(data)
    console.log("---> Final del fichero")
});

// NO ESTAMOS PROCESANDO ERRORES.

// Forzamos un error -> el fichero test2.txt NO EXISTE.
// No genera ningún error o excepción.
// Invoca la función retrollamada, parámetro 'data' y no encuentra datos.
// Nuestro programa no tiene en cuenta el parámetro 'err'.

// En el terminal te lo indica como 'undefined'.
// Indicando el contenido de 'data'.
