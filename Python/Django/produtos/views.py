from django.shortcuts import render
# Create your views here.
from django.http import HttpResponse

def pagina_produtos(request);
    return HttpResponse('Página de produtos')