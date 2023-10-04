from django.db import models


# Create your models here.
class Customer(models.Model):
    name = models.CharField(max_length=100)
    number = models.IntegerField()
    gender = models.CharField(max_length=6)


class Order(models.Model):
    item = models.CharField(max_length=100)
    number = models.IntegerField()
    quantity = models.CharField(max_length=100)
