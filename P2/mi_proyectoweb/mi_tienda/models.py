
# Creando la base de datos:

from __future__ import unicode_literals
from django.db import models

# Create your models here.
class Artesanas (models.Model):
    nombre = models.CharField(max_length=200)
    tipo = models.CharField(max_length=200)
    alcohol = models.FloatField()
    origen = models.CharField(max_length=200)
    precio = models.FloatField()
    stock = models.IntegerField()

    def __str__(self):
        return (self.nombre)


class Singluten (models.Model):
    nombre = models.CharField(max_length=200)
    tipo = models.CharField(max_length=200)
    alcohol = models.FloatField()
    origen = models.CharField(max_length=200)
    precio = models.FloatField()
    stock = models.IntegerField()

    def __str__(self):
        return (self.nombre)


class Especiales (models.Model):
    nombre = models.CharField(max_length=200)
    tipo = models.CharField(max_length=200)
    alcohol = models.FloatField()
    origen = models.CharField(max_length=200)
    precio = models.FloatField()
    stock = models.IntegerField()

    def __str__(self):
        return (self.nombre)
