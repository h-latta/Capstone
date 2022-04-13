from rest_framework import serializers
from .models import Owner
from .models import Vet
from .models import Dog
from .models import Event

class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner
        fields = ['address', 'phone_number', 'user']
        depth = 1

class VetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vet
        fields = ['address', 'phone_number', 'user']
        depth = 1

class DogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dog
        fields = ['name', 'breed', 'birthday', 'last_checkup', 'conditions', 'user']
        depth = 2

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['user', 'dog', 'vet', 'date', 'time', 'description']
        depth = 2