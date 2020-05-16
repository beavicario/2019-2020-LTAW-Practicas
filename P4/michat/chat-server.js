
const express = require('express')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = 8080

var num_users = 0;

// LANZAR SERVIDOR.
http.listen(PORT, function(){
  console.log('Servidor lanzado en puerto ' + PORT);
});

// PÁGINA PRINCIPAL.
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log("Página principal: /")
});

// PÁGINA CLIENTE.
app.get('/chat-client.js', function(req, res){
  res.sendFile(__dirname + '/chat-client.js');
  console.log("Fichero solicitado")
});

// PÁGINA ESTILO.
app.get('/chatstyle.css', function(req, res){
  res.sendFile(__dirname + '/chatstyle.css');
  console.log("Fichero solicitado")
});

// NUEVA CONEXIÓN.
// ¡Un nuevo cliente se ha conectado!
io.on('connection', function(socket){

  // Detectamos el cliente nuevo
  socket.on('new_client', nick =>{
      console.log("Client: " + nick + " connected.")
      // Detectar si se ha recibido un mensaje del cliente
      num_users += 1;
      socket.on('new_message', msg => {

      // Notificarlo en la consola del servidor
      console.log("Mensaje recibido: " + msg)

      // Tratamos los distintos mensajes
      // Emitir un mensaje a todos los clientes conect.
      if (msg == '/help'){
        msg = 'SERVER Supported commands: ' + "<br>" +
              '/list : Devuelve el número de usuarios conectados' + "<br>" +
              '/hello : Devuelve saludos desde el servidor' + "<br>" +
              '/date : Devuelve la fecha actual';
        io.emit('new_message', msg);
      }else if (msg == '/list'){
        msg = 'Número de usuarios conectados: ' + num_users;
        io.emit('new_message', msg);
      }else if (msg == '/hello'){
        msg = 'SERVER: Bienvenido al Chat de Beatriz.';
        io.emit('new_message', msg);
      }else if (msg == '/date'){
        var d = new Date();
        var yy = d.getFullYear();
        var mm = d.getMonth();
        var dd = d.getDate();
        msg = 'SERVER: ' + dd + '/' + mm + '/' + yy;
        io.emit('new_message', msg);
      }else{
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();
        var time = '[' + h + ':' + m + ':' + s +']'
        io.emit('new_message', time + nick +': ' + msg);
      }
    });

    //-- Detectar si el usuario se ha desconectado
    socket.on('disconnect', function(){
      console.log(nick + ' se ha desconectado');
      num_users -= 1;
    });
  });


});
