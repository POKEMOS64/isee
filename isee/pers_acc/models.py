from django.db import models

class Personal_account(models.Model):
    acc = models.CharField(max_length=20,unique=True)
    # name = models.CharField(max_length=10)
    def __str__(self):
        acc = str(self.acc)
        return acc
    
# Create your models here.
