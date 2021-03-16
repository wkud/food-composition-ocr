from django.db import models

class Eadditives(models.Model):
    code = models.CharField(max_length=10, unique=True)
    name = models.CharField(max_length=300)
    description = models.TextField(default=None, blank=True, null=True)

    def __str__(self):
        return '{} {}'.format("E" + self.code, self.name)