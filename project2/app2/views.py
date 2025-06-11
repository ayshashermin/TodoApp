from django.shortcuts import render
from app2.models import todo
from app2.serializers import todoserializer
from rest_framework.viewsets import ModelViewSet

# Create your views here.
class Todoview(ModelViewSet):
    serializer_class=todoserializer
    queryset=todo.objects.all()
