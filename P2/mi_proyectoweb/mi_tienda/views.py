
from django.http import HttpResponse
from django.shortcuts import render
from random import randint

# -- Vista principal de mi tienda
# -- El nombre de la vista puede ser cualquiera. Nosotros lo hemos
# -- llamado index, pero se podría haber llamado pepito
def index(request):
    return HttpResponse("Hola! esta es la página principal de Mi tienda!")

# -- Ejemplo de generacion a partir de cadenas con código html
def test1(request):

    # -- Obtener el número aleatorio
    numero = randint(0, 100)

    # Párrafo a insertar
    P = "<p>Numero aleatorio: " + str(numero) + " </p>"

    PAGINA_INI = """
    <!DOCTYPE html>
    <html lang="es" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title>Test1</title>
      </head>
      <body>
        <h1>TEST1</h1>
    """

    PAGINA_FIN = """
      </body>
    </html>
    """
    return HttpResponse(PAGINA_INI + P + PAGINA_FIN)

# -- Ejemplo de generacion mediante una plantilla en FICHERO
def test3(request):

    # -- Obtener el número aleatorio
    numero = randint(0, 100)

    # -- Leer la plantilla del fichero
    t = get_template('test.html')

    # -- Crear el contexto: Asignar el numero
    c = {'numero': str(numero)}

    # -- Obtener la pagina html final
    html = t.render(c)

    return HttpResponse(html)

# -- Ejemplo de uso de la función Render
def test4(request):
    # -- Obtener el número aleatorio
    numero = randint(0, 100)
    return render(request, 'test.html', {'numero':str(numero)})