from django.contrib import admin
from .models import Appointment


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('user', 'patiantname', 'mobileno', 'department', 'doctor', 'date', 'time', 'reason')
    list_filter = ('patiantname', 'mobileno', 'department', 'doctor', 'date')
    search_fields = ('patiantname', 'mobileno', 'user__username', 'doctor', 'department')

