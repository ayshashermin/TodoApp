from rest_framework import serializers
from app2.models import todo


class todoserializer(serializers.ModelSerializer):
    
    class Meta:
        model=todo
        fields="__all__"