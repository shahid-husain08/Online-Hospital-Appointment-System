from django import forms
from .models import User
class UserRegistrationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    confirmPassword = forms.CharField(widget=forms.PasswordInput)
    
    class Meta:
        model = User
        fields = ['fullName', 'email', 'password', 'confirmPassword', 'mobileNumber']

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        confirmPassword = cleaned_data.get("confirmPassword")

        if password and confirmPassword and password != confirmPassword:
            self.add_error('confirmPassword', "Passwords do not match")
            
class UserLoginForm(forms.Form):
    email = forms.EmailField(widget=forms.EmailInput(attrs={'placeholder': 'Email'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Password'}))
