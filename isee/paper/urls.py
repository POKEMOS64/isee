from django.urls import path
from .views import paper

urlpatterns = [
    path('<int:like>/', paper,kwargs={'like':'50'}, name='paper'),
]