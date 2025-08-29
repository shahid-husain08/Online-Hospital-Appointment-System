from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class Adminpanel(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    full_name = models.CharField(max_length=100)

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

    def __str__(self):
        return self.full_name

