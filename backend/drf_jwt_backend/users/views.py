from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Owner
from .models import Vet
from .models import Dog
from .serializers import OwnerSerializer
from .serializers import VetSerializer
from .serializers import DogSerializer
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def owner_requests(request):
    if request.method == 'GET':
        owner = Owner.objects.all()
        serializer = OwnerSerializer(owner, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = OwnerSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.errors, status=status.HTTP_201_CREATED)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def vet_requests(request):
    if request.method == 'GET':
        vet = Vet.objects.all()
        serializer = VetSerializer(vet, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = VetSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.errors, status=status.HTTP_201_CREATED)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def dog_requests(request):
    if request.method == 'GET':
        dog = Dog.objects.all()
        serializer = OwnerSerializer(dog, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = DogSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.errors, status=status.HTTP_201_CREATED)