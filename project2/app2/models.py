from django.db import models

# Create your models here.
class todo(models.Model):
    Title=models.CharField(max_length=100)
    description=models.CharField(max_length=100)
    date=models.DateField(auto_now_add=True)
    