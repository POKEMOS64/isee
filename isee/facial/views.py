from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def facial(request):
    return HttpResponse('Лицевой и все остальное!')

def passport(request):
    return HttpResponse('Тут будут паспортные данные абонентов')

def facial_doc(request):
    return HttpResponse('Вложения к основному лицевому!')

def facial_register(request):
    return HttpResponse('Зарегистрированные')
