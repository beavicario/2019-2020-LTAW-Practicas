
//-- Cargar las dependencias
//-- Modulo express
const express = require('express')

//-- Crear una nueva aplciacion web
const app = express()

//-- Crear un servidor. Los mensajes recibidos
//-- los gestiona la app
const http = require('http').Server(app);

//-- Puerto donde lanzar el servidor
const PORT = 8080

//-- Punto de entrada pricipal de mi aplicación WEB
// Implementación de aplicación Web.
app.get('/', (req, res) => {
  res.send('Bienvenido a mi aplicación WEB!')
})

//-- Lanzar servidor
http.listen(PORT, function(){
  console.log('Servidor lanzado en puerto ' + PORT);
});

// Conectarse a otro dispositivo -> en la URL: Dirección IP SERVIDOR:PUERTO
//  192.168.1.45:8080.
