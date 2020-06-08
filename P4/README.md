# Práctica 4

ENUNCIADO P4.
Hacer un chat en el que múltiples usuarios puedan hablar entre sí. Primero hay que lanzar el servidor (hecho con node) al que se conectarán los usuarios. Cada vez que un usuario se conecte el servidor le enviará un mensaje de Bienvenida, y anunciará al resto de participantes que se ha conectado alguien nuevo

La conexión al servidor será a través del navegador. Una vez conectado el servidor devuelve la página html y los ficheros javascript y de estilo necesarios

El servidor, además, responderá a estos comandos:

/help: Mostrará una lista con todos los comandos soportados
/list: Devolverá el número de usuarios conectados
/hello: El servidor nos devolverá el saludo
/date: Nos devolverá la fecha
Cuando el servidor detecta que llega un mensaje que empieza por el carácter '/', lo interpretará como un comando y lo procesará (pero no lo enviará al resto de usuarios del chat). El resto de mensjaes que no sean comandos sí los re-enviará a los participantes del chat

ESTRUCTURA P4.
Se crea un index.html con el título del Chat y un botón para poder escribir y enviar mensajes.

Se crea el servidor en JavaScript siguiendo los ejercicios de esta práctica y se le añade un condicional con los tipos de mensajes que se pueden enviar. En el servidor se llama a la página de estilo "chatstyle.css" y al cliente. En el cliente, mediante socket enviamos el mensaje que hemos escrito y el display lo muestra.
