
# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

from mi_tienda.models import Artesanas
from mi_tienda.models import Singluten
from mi_tienda.models import Especiales


# Create your views here.
def home_view (request):
    return render(request, "index.html", {})

def lartesanas_view (request):
    return render(request, "artesanas.html", {})

def singluten_view (request):
    return render(request, "singluten.html", {})

def especiales_view (request):
    return render(request, "especiales.html", {})

def search_view (request):
    return render(request, "search.html", {})


def searching(request):
    query = request.GET.get('q', '')
    if query:
        qset = (
            Q(nombre__icontains=query) |
            Q(tipo__icontains=query) |
            Q(alcohol__icontains=query) |
            Q(origen__icontains=query) |
            Q(precio__icontains=query) |
            Q(stock__icontains=query)
        )
        results = Artesanas.objects.filter(qset).distinct()
    else:
        results = []
    return render(requets, {
        "results": results,
        "query": query,
    })

"""
def list(request):
    objects = Artesanas.objects.all()
    html = "<p> Listado de articulos </p>"
    for elt in objects:
        print(elt.name)
        html += '<p>'+ elt.name + ' ' + str(elt.precio) + '<p>'
    return HttpResponse(html)
"""
