from django.shortcuts import render
from rest_framework.views import APIview
from .models import *
from .serializer import *
from rest_framework.response import Response
# Create your views here.
def members(request):
    return HttpResponse("Hello world!")