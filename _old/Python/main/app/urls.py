from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('', pagina_inicial, name='pagina_inicial'),
]