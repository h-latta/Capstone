from django.urls import path
from . import views

urlpatterns = [
    path('owner/', views.get_owner),
    path('owner_register/', views.owner_register),
    path('owner/<int:pk>/', views.update_or_delete_owner),
    path('vet/', views.get_vet, views.vet_register),
    path('vet_register/', views.vet_register),
    path('vet/<int:pk>/', views.update_or_delete_vet),
    path('dog/', views.dog_requests),
    path('dog/<int:pk>/', views.update_or_delete_dog),
]