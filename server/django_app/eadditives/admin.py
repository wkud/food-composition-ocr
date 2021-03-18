from django.contrib import admin
from .models import Eadditives

@admin.register(Eadditives)
class EadditivesAdmin(admin.ModelAdmin):
    list_display = ("code", "name")

    search_fields = ("code__startswith", "name__startswith")

