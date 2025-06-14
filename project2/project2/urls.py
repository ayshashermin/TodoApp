"""
URL configuration for project2 project.

The urlpatterns list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app2 import views
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from app2.views import LogoutView
from app2.views import  AdminLoginView
from app2.views import TodoDashboardView



router=DefaultRouter()

router.register('todoapp',views.Todoview,basename='todo_view'),
router.register('reg',views.UserRegisterView,basename='reg_view'),
# router.register('logout',views.LogoutView,basename='logout'),

urlpatterns = [
    path('admin/', admin.site.urls),
    path('token',obtain_auth_token),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('adminlogin', AdminLoginView.as_view(), name='admin-login'),
    path('dashboard/', TodoDashboardView.as_view(), name='todo-dashboard'),

]+router.urls
urlpatterns += router.urls