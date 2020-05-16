
# Punto de entrada principal:

from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.home_view),
    url(r'^admin/', admin.site.urls),
    url(r'^index', views.home_view),
    url(r'^artesanas', views.artesanas_view),
    url(r'^singluten', views.singluten_view),
    url(r'^especiales', views.especiales_view),
    url(r'^search', views.search_view),
]
