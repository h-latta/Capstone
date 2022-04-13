from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Owner
from .models import Vet
from .models import Dog
from .models import Event
from .serializers import OwnerSerializer
from .serializers import VetSerializer
from .serializers import DogSerializer
from .serializers import EventSerializer
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_owner(request):
    if request.method == 'GET':
        owner = Owner.objects.all()
        serializer = OwnerSerializer(owner, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([AllowAny])
def owner_register(request):
    serializer = OwnerSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(serializer.errors, status=status.HTTP_201_CREATED)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def update_or_delete_owner(request, pk):
    owner = get_object_or_404(Owner, pk=pk)
    if request.method == 'PUT':
        serializer = OwnerSerializer(owner, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        owner.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_vet(request):
    if request.method == 'GET':
        vet = Vet.objects.all()
        serializer = VetSerializer(vet, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([AllowAny])
def vet_register(request):
    serializer = VetSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(serializer.errors, status=status.HTTP_201_CREATED)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def update_or_delete_vet(request, pk):
    vet = get_object_or_404(Vet, pk=pk)
    if request.method == 'PUT':
        serializer = VetSerializer(vet, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        vet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def dog_requests(request):
    if request.method == 'GET':
        dog = Dog.objects.all()
        serializer = DogSerializer(dog, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = DogSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.errors, status=status.HTTP_201_CREATED)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def update_or_delete_dog(request, pk):
    dog = get_object_or_404(Dog, pk=pk)
    if request.method == 'PUT':
        serializer = DogSerializer(dog, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        dog.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def event_requests(request):
    if request.method == 'GET':
        event = Event.objects.all()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.errors, status=status.HTTP_201_CREATED)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def update_or_delete_event(request, pk):
    event = get_object_or_404(Event, pk=pk)
    if request.method == 'PUT':
        serializer = EventSerializer(event, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)