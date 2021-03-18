from rest_framework import serializers
from .models import Eadditives


class EadditivesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Eadditives
        fields = '__all__'
