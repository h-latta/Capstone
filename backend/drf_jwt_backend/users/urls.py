from django.urls import path
from . import views

urlpatterns = [
    path('owner', views.owner_requests),
    path('vet', views.vet_requests),
    path('dog', views.dog_requests)
]