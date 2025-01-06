from django.db import models


class Location(models.Model):
    acc = models.CharField(max_length = 50,unique=True)
    city = models.CharField(max_length = 255)
    street = models.CharField(max_length = 200)
    home = models.CharField(max_length = 200)
    fract = models.CharField(max_length = 20, blank=True, null=True)
    flat = models.IntegerField(max_length = 50)
    big_square = models.IntegerField(max_length = 10)
    square = models.IntegerField(max_length = 10)
    create = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now = True)

    class Meta:
        ordering = ["-update"]
        indexes = [
            models.Index(fields = ['-update']),
        ]
    def __str__(self):
        return self.acc