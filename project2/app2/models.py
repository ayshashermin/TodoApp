from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class todo(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    Title=models.CharField(max_length=100)
    description=models.CharField(max_length=100)
    date=models.DateField(auto_now_add=True)