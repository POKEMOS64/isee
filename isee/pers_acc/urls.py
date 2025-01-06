from django.urls import path

from .views import personal_account, card_account

urlpatterns = [
    path('', personal_account, name='acc'),
    path('card/',card_account, name='card')
]
