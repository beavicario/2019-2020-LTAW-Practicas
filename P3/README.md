# Práctica 3

ENUNCIADO P3.
El objetivo de la práctica es familiarizarse con tres formas de interacción entre un cliente y un servidor: Formularios, cookies y peticiones AJAX. Con ellos implementaremos tres nuevas características a nuestro servidor web tienda de la práctica 1: Formulario de compra, carrito de la compra y búsqueda con autocompletado

Carrito de la compra: Para tener carrito de la compra, el usuario deberá registrarse primero en la tienda. Para ello pinchará en el enlace en ingresar y el servidor creará una cookie con un identificador de usuario conocido (En una tienda real sería un valor generado aleatoriamente). En cada producto habrá un botón de añadir al carrito, que hará que el servidor añada el producto a otra cookie. Al apretar el botón de comprar, el servidor leerá los productos a comprar de la cookie, y los mostrará como respuesta

Formulario de compra: Al pinchar en el enlace de comprar, además de lo anterior, el servidor enviará un formulario donde el usuario deberá rellenar los datos para formalizar la compra: Nombre, Apellidos, Correo Electrónico y Método de pago (paypal, tarjeta de crédito, transferencia bancaria). El servidor recibe esta información y debe crear una página de respuesta, mostrando los datos recibidos

Búsqueda con autocompletado: La tienda tendrá una caja de búsqueda, para buscar información sobre un producto. Al escribir 3 ó más caracteres, aparecerá un menú desplegable con las opciones posibles. Al apretar el botón de buscar se enviará esta inforamción, y el servidor devolverá una página con información sobre el producto

Se implementará en Node.js, partiendo del código de la práctica 1

FUNCIONALIDAD P3.
Se crea una página Web de una tienda de Cervezas.
Esta página consta de un menú principal, donde encontramos cuatro submenús clasificados
en tipos de cervezas: Artesanas, Sin Gluten y Especiales. Dentro de cada submenú encontramos distintas cervezas.

A esta práctica se ha añadido una barra de búsqueda que al escribir mínimo tres letras aparecerán los artículos que contengan dichas letras seguidas. Para comprar los artículos es necesario ingresar en el registro y se crea la cookie. Una vez registrado se pueden comprar los artículos y se ve el carrito que tiene el email con el que has comprado. Ademán hemos aññadido los métodos de pago y rellenar los datos dentro de la página del carrito.

Además consta de un CSS el cuál le da estilo a nuestra página Web.

Al servidor nos conectamos por el puerto 8000 mediante la URL: localhost:8000/mi_tienda

ESTRUCTURA P3.
Encontramos los documentos html que ya se han implememtado en la P1 (index.html, artesanas.html, singluten.html y especiales.html). Además se crea carrito.html donde se declara en emal para poder sacar los datos de carrito y los datos de compra.
También se encuentran los métodos de pago de tipo "radio" pata poder seleccionar el que queramos.
También encontramos un fichero registro.html que sirve para poder registrarte antes de comprar. Tienes que meter los datos de "Nombre", "Email"y "Localidad" y se genera la cookie. Si no estás registrado e intentas comprar un artículo, al no encontrar la cookie te lleva directamente a la pestaña de registro.

En javascript se crea el servidor, similar al de la P1 pero se añaden un "let productos" clasificado en categorías los datos del registro y de la compra y se realiza un "switch" donde se declara el tipo MIME dependiendo de la extension que tenga. Dentro de este switch encontramos la búsqueda, el carrito y la compra. Y para que se guarde la cookie.
También tenemos un cliente.js con peticiones AJAX que inicializa el Servidor.
