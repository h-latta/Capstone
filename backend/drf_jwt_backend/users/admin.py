from django.contrib import admin
from .models import Vet
from .models import Owner
from .models import Dog
from .models import Event

# Register your models here.

admin.site.register(Owner)
admin.site.register(Vet)
admin.site.register(Dog)
admin.site.register(Event)
