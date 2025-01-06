from django.shortcuts import render
from django.http import HttpResponse


def idx(request):
    return render(request,'idx/index.html')

# Create your views here.
