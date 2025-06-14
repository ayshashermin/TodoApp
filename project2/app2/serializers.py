from rest_framework import serializers
from app2.models import todo
from django.contrib.auth.models import User

class todoserializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model=todo
        fields="__all__"

    def get_user(self, obj):
        return obj.user.username if obj.user else None

    def create(self, validated_data):
        user=self.context.get('user')
        return todo.objects.create(user=user,**validated_data)      


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['username','email','password']
        extra_kwargs = {'password': {'write_only': True}}     

    def create(self, validated_data):
       return User.objects.create_user(**validated_data)