
from django.urls import path

# -- Importar todas las vistas de mi_tienda
from . import views

# -- Aquí se definen las URLs de nuestra tienda
# -- Metemos de momento sólo la principal (índice)

urlpatterns = [
    # -- Vista pricipal (índice)
    path('', views.index, name='index'),
    path('cerveza_<tipo>', views.cerveza, name='cerveza'),
    path('carrito', views.carrito, name='carrito'),
    path('pedido', views.pedido, name='pedido'),
    path('comprar', views.comprar, name='comprar')

]
