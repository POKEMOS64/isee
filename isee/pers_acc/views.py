from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def personal_account(request):
    acc = request.GET.get('acc')
    return HttpResponse(f'Лицевые счета! например {acc}')

def card_account(request):
    return HttpResponse('Карточка абонента')

