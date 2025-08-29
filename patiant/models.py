from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User



class Appointment(models.Model):
    STATUS_CHOICES = [
    ('pending', 'Pending'),
    ('accepted', 'Accepted'),
    ('cancelled', 'Cancelled'),
    ('completed', 'Completed'),
]
   
    
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    patiantname = models.CharField(max_length=100)
    mobileno = models.CharField(max_length=10)
    department = models.CharField(max_length=100)
    doctor = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    reason = models.TextField()
    status = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES,
        default='pending'
    )

    def __str__(self):
        return f"{self.user.email} - {self.date} - {self.time}"
    
# patient/models.py



