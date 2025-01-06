from django.urls import path
from facial import views  

urlpatterns = [
    path('', views.facial, name='facial'),
    path('passport/', views.passport, name='passport'),
    path('registr/', views.facial_register),
]
