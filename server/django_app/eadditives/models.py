from django.db import models

class Eadditives(models.Model):
    code = models.CharField(max_length=10, unique=True)
    name = models.CharField(max_length=300)
    
    def __str__(self):
        return "E" + self.code, self.name