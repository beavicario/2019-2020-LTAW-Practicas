# Práctica 1

ENUNCIADO P1.
Construir un servidor web usando Node.js, que sirva las páginas de la web de una tienda.
Las páginas serán estáticas (en HTML), y consistirán en textos e imágenes, compartiendo una hoja de estilo.
La tienda debe tener al menos 3 productos.

FUNCIONALIDAD P1.
Se crea una página Web de una tienda de Cervezas.
Esta página consta de un menú principal, donde encontramos cuatro submenús clasificados
en tipos de cervezas: Artesanas, Sin Gluten, Especiales y Sin Alcohol. dentro de cada submenú encontramos distintas cervezas.

En el subtipo de cerveza "Sin Alcohol" se encuentra un error, 404 Not Found.
Este error se declara en el index.htlm ya que se crea un href="sinalcohol.html" que hace referencia a un HTML que no existe.

Además consta de un CSS el cuál le da estilo a nuestra página Web.

ESTRUCTURA P1.
index.html: Página principal del dominio al cual se accede desde el Navegador. En el Servidor se declara que la raíz devuelva "index.html"
Consta de una clase llamada cabecera donde se presenta el nombre de nuestra tienda y varios títulos o comentarios para dar la bienvenida al usuario.
Después nos encontramos una nueva sección con los submenús que presenta la página Web, y el atributo a href="" nos lleva a los distintos HTML de las cervezas: artesanas.html, especiales.html y singluten.htlm. Estos HTML utilizan una estructura similar al index.html, constan de una sección cabecera y otra sección con los artículos las cervezas.
Por último, todos los HTML cuentan con un pie de página que contiene mis datos.

server.js: Código JavaScript. Se encarga de recibir las peticiones del cliente, el navegador, y enviar una respuesta a cada una de esas peticiones.
Nuestro servidor se encuentra configurado en el puerto 8080.
Se configura el servidor para lanzarlo mediante Nodejs. El cliente le envía una petición y el servidor, una vez recibida esa petición, accede a sus archivos locales para generar una respuesta al cliente.
Además encontramos un bucle que lee el fichero y en caso de no encontrarlo, devuelve un mensaje de error "404 Not Found"
