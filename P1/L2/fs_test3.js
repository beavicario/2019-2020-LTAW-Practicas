
const fs = require('fs');

console.log("Este mensaje está AL COMIENZO del código")

//-- Leer el fichero
fs.readFile('test.txt', 'utf8', function (err, data) {
    console.log("---> Comienzo del fichero leido")
    console.log(data)
    console.log("---> Final del fichero")
});

console.log("Este mensaje está al FINAL del código")

// function(err, data) -> función de retrollamada completa.
// Lanzar la lectura del fichero test.txt y seguir ejecutando instrucciones.
// Cuando el fichero se haya leido, ejecutar las instrucciones que están entre llaves.

// NO ESTAMOS PROCESANDO ERRORES.
