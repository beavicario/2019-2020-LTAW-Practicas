
var fs = require('fs');

//-- Leer el fichero
fs.readFile('test.txt', 'utf8', (err, data) => {
    console.log("---> Comienzo del fichero leido")
    console.log(data)
    console.log("---> Final del fichero")
});


// Introducimos (err, data) como OPERADOR -> funcionamiento igual.
// Definimos una función que se ejecutará cuando se termine de leer el fichero.
// Simplificamos código.

// Se han quitado los mensaje INICIAL y FINAL.

// NO ESTAMOS PROCESANDO ERRORES.
