
from django.shortcuts import render
from mi_tienda.models import Producto, Pedido
import json

# Create your views here.
def index(request):
    return render (request, "index.html", {})

def cerveza(request,tipo):
    return render (request, "cerveza.html", {"cerveza":Producto.objects.filter(clase=tipo)})

def pedido(request):
    try:
        pedido = Pedido.objects.get(nombre=request.POST["nombre"])
        return render(request, 'pedido.html', {'pedido' : json.loads(pedido.articulo), 'precio' : pedido.total})
    except:
        return render(request, "pedido.html", {'pedido' : '', 'precio' : ''})

def carrito(request):
    return render(request, "pedido.html", {'pedido' : '', 'precio' : ''})

def comprar(request):
    try:
        pedido = Pedido.objects.get(nombre=request.POST["nombre"])
    except:
        pedido = Pedido(nombre=request.POST["nombre"])

    articulo = Producto.objects.get(nombre=request.POST["cerveza"])
    carrito = json.loads(pedido.articulo)

    if articulo.nombre in carrito:
        carrito[carrito.index(articulo.nombre) + 1][0] += 1
    else:
        carrito.append(articulo.nombre)
        carrito.append([1])

    pedido.total += articulo.precio
    pedido.articulo = json.dumps(carrito)
    pedido.save()
    return render(request, "index.html", {})
