from django.shortcuts import render
from django.http import HttpResponse


def idx(request,name,age):
    return HttpResponse(f'''
        <h2>Добро пожаловать</h2>
        <p>Мы запустили новый проект только в РФ</p>
        <p>Вас зовут: {name}</p>
        <p>Вам: {age}</p>
     ''')

# Create your views here.
