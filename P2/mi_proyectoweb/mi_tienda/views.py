
from django.shortcuts import render
from mi_tienda.models import Producto

# Create your views here.
def index(request):
    return render (request, "index.html", {})

def cerveza(request,tipo):
    return render (request, "cerveza.html", {"cerveza":Producto.objects.filter(clase=tipo)})

def pedido(request):
    return render(request, 'pedido.html', {'pedido' : '', 'precio' : ''})
