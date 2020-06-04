# Práctica 2

ENUNCIADO P2.
Crear una tienda usando django. La versión que utilizaremos será la 2.2.10, que es la última estable (LTS), y funciona sobre python3

La tienda al menos debe incluir los siguientes elementos:
Al menos 3 productos diferentes (puede ser la misma tienda que la práctica 1)
El sitio debe generar varias vistas: la general, sólo producto-1, sólo producto-2, sólo producto-3, los resultados de las búsquedas, etc...
Se deben utilizar plantillas para generar los contenidos dinámicos concretos
El cliente debe poder rellenar un formulario para relizar un pedido concreto, que se recibe en el servidor y se inserta en la base de datos
Diseña los modelos de datos y la aplicación de la tienda
Como base de datos usaremos SQLite

FUNCIONALIDAD P2.
Se crea una página Web de una tienda de Cervezas.
Esta página consta de un menú principal, donde encontramos cuatro submenús clasificados
en tipos de cervezas: Artesanas, Sin Gluten y Especiales. Dentro de cada submenú encontramos distintas cervezas.

A esta práctica se ha añadido en cada artículo un formulario con un "input" dónde el usuario indica su nombre y selecciona el artículo. Esto es importante porque en el carrito se debe indicar el nombre de la persona que hace el pedido para poder sacar todos los artículos comprados por esa persona, y el número de artículos de cada tipo de cerveza que ha comprado.

Además consta de un CSS el cuál le da estilo a nuestra página Web.

Al servidor nos conectamos por el puerto 8000 mediante la URL: localhost:8000/mi_tienda

ESTRUCTURA P2.
STATIC - Se guardan los ficheros estáticos como las imágenes y el estilo, fichero CSS.

TEMPLATES - base.html: Consta de una clase llamada "cabecera" donde se presenta el nombre de la tienda y varios títulos o comentarios para dar la bienvenida al usuario. Y un pie de página que contiene mis datos. Entre la cabecera y el pie de página se inserta la sección indicada en el index.html. Esta contiene los submenús de cervezas, referenciados a los templates: artesanas.html, especiales.html y singluten.htlm.
Por último, cervezas.html nos muestra los artículos y sus características acompañados del "input NOMBRE:" el cuál se asocia al pedido que vamos a obtener en el carrito.

Además el pedido realizado con un nombre, metido por el usuario a la hora de comprar un artículo, se guarda en la Base de Datos de Django.

PORTAL DJANGO: localhost:8000/admin
USUARIO: namaste
CONTRASEÑA: beatriz93

FICHEROS PYTHON - en models.py declaramos la clase "productos" con el nombre de cada una de las características de los artículos de cerveza seguido del tipo de atributo que es cada una de ellas. Y, declarado de la misma manera, se encuentra otra clase llamada "pedido" donde se declaran los elementos de los que constará el pedido en nuestro carrito. Todo ellos está registrado en admin.py.

El controlador de Django se compone de views.py formado por las funciones que tiene el programa. En ella renderizamos los templates y su contexto. Y además, declaramos la función "comprar" que nos lista el carrito con los artículos relacionados al nombre que a indicado el usuario, si existe el pedido, y el total. Urls.py actúa como puerta de entrada para las peticiones HTTP del Cliente y se redirigen a las funciones del views.py
