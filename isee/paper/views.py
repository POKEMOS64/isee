from django.shortcuts import render
from django.http import HttpResponse



def paper(request,like):
    return HttpResponse(f'''
        <h2>У Вас есть {like} лайков</h2>
    ''')



# Create your views here.
