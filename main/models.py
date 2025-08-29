from django.db import models


# Create your models here.

class User(models.Model):
    fullName = models.CharField(max_length=20)
    email = models.EmailField(unique=True)  
    password = models.CharField(max_length=255)
    confirmPassword = models.CharField(max_length=255)
    mobileNumber = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    
    def __str__(self):
        return self.fullName

