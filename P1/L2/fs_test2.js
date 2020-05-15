
const fs = require('fs');

console.log("Este mensaje está AL COMIENZO del código")

//-- Leer el fichero. Al terminar se invoca a la función show_file
fs.readFile('test.txt', 'utf8', show_file);

//-- Funcion llamada cuando se ha terminado de leer el fichero
function show_file(err, data) {
    console.log("---> Comienzo del fichero leido")
    console.log(data)
    console.log("---> Final del fichero")
}

console.log("Este mensaje está al FINAL del código")

// Se importa biblioteca fs y se imprime el primer mensaje.
// "Este mensaje está AL COMIENZO del código".

// Función readFile() para leer fichero. Tarda tiempo.
// Cuando se termine de leer fichero se llamará a función show_file().

// Fs sigue ejecuntando resto de instrucciones.
// Se imprime antes el último mensaje que readFile().
// "Este mensaje está al FINAL del código".

// Emite el evento de readFile() e invoca a la función show_file().

// NO ESTAMOS PROCESANDO ERRORES.
