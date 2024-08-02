from rest_framework import serializers
from .models import *

class SerializerName(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['firstname','lastname']