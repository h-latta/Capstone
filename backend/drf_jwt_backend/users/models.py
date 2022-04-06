from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.


class Owner(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=13)

class Vet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=13)

class Dog(models.Model):
    owner = models.ForeignKey(Owner, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    breed = models.CharField(max_length=255)
    birthday = models.DateField()
    last_checkup = models.DateField()
    conditions = models.TextField()
