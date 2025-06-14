from django.shortcuts import render
from app2.models import todo
from app2.serializers import todoserializer,UserRegisterSerializer
from rest_framework.viewsets import ModelViewSet,ViewSet
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
# from rest_framework.decorators import api_view
from rest_framework.views import APIView
from django.contrib.auth import authenticate,login
from rest_framework.authtoken.models import Token 
from rest_framework import status
from django.contrib.auth.models import User


# Create your views here.



class UserRegisterView(ViewSet):
    def create(self,request,*args,**kwargs):
        serializer=UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        

class Todoview(ModelViewSet):
    serializer_class=todoserializer
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]
    queryset=todo.objects.all()    

    def create(self, request, *args, **kwargs):
        serializer=todoserializer(data=request.data,context={'user':request.user})
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        else:
            return Response(data=serializer.errors)
        
    def list(self,request,*args,**kwargs):
        if request.user.is_superuser:
         todos = todo.objects.all()
        else:
         todos=todo.objects.filter(user=request.user)
         print(todos)
        serializer=todoserializer(todos,many=True)
        return Response(data=serializer.data)     


class LogoutView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()  # Deletes the token from DB
        return Response({"message": "Successfully logged out."})


class AdminLoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if user is not None:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'username': user.username,
                'is_admin': user.is_superuser  
            })
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        


class TodoDashboardView(APIView):
   authentication_classes = [TokenAuthentication]
   permission_classes = [IsAuthenticated]

   def get(self, request):
        if not request.user.is_superuser:
            return Response({"error": "Unauthorized"}, status=status.HTTP_403_FORBIDDEN)

        total_count = todo.objects.count()

        return Response({"total_todo_count": total_count})