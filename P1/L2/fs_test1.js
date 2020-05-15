
//-- Acceso al módulo fs, para lectura de ficheros
const fs = require('fs');

//-- Funcion llamada cuando se ha terminado de leer el fichero
function show_file(err, data) {

// err -> información sobre error NULL == NO ERROR.
// data -> datos leídos en el fichero. UTF8 == cadena(string).

    //-- Mostrar el contenido del fichero
    console.log(data)
}

//-- Leer el fichero. Al terminar se invoca a la función show_file
fs.readFile('test.txt', 'utf8', show_file);


// Lee "test.txt" con la función readFile.
// Formato de ficheros de texto UTF8.
// Función a la que se llama terminada la lectura del fichero.
// Evento = FIN LECTURA -> retrollamada función show_file().

// NO ESTAMOS PROCESANDO ERRORES.
