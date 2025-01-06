from django.urls import path
from .views import idx

urlpatterns = [
    path('',idx,name='index',)
]
