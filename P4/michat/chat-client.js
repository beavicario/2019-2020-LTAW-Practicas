function main() {
  var nick = prompt("Whats your nick??");
  console.log("Bienvenido al chat")

  // WEBSOCKET.
  const socket = io();

  const display = document.getElementById("display");
  const msg = document.getElementById("msg");
  const send = document.getElementById("send");

  // var nick = document.getElementById("nick")
  socket.emit('new_client', nick);

  console.log(nick + " se ha conectado");

  // BOTÓN DE ENVIAR
  send.onclick = () => {
    socket.emit('new_message', msg.value);
    console.log("Mensaje emitido")
  }

  // Mostrar mensaje del servidor.
  socket.on('new_message', msg => {
    display.innerHTML += msg + '<br>';
  });

}
