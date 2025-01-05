from django.urls import path
from .views import idx

urlpatterns = [
    path('',idx,kwargs={'name':'Сергей','age':'34'},name='index',)
]
