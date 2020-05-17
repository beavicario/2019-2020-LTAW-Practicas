
# Creando la base de datos:

from __future__ import unicode_literals
from django.db import models

# Create your models here.
class Producto (models.Model):
    nombre = models.CharField(max_length=200)
    clase = models.CharField(max_length=200, default="")
    tipo = models.CharField(max_length=200)
    alcohol = models.FloatField()
    origen = models.CharField(max_length=200)
    precio = models.FloatField()

    def __str__(self):
        return (self.nombre)

    def get_image(self):
        return "imagenes/" + self.nombre.replace(" ", "-").lower() + ".jpg"

    def get_id(self):
        return self.nombre.replace(" ", "").lower()
