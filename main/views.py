from django.shortcuts import render , redirect
from django.contrib.auth.models import User
from django.contrib.auth import login , logout , authenticate , get_user_model
from django.contrib import messages
from django.contrib.auth.hashers import make_password, check_password
import mysql.connector as sql
from django.contrib.auth.models import User
from .forms import UserRegistrationForm , UserLoginForm
from django.db import connection

User = get_user_model()



# Create your views here.

def home(request):
    context = {"title" : "Home Page"}
    return render(request, 'home.html', context)

def auth(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")

        user = authenticate(request, email=email, password=password)  # ✅ email login

        if user is not None:   
            login(request, user)    #login successful
            return render(request,'index.html',{})
        else:
            messages.error(request, "Invalid email or password.")
            return redirect("user_not_exist")

    return render(request, "login.html")
    
    

def user_register(request):
    
    if request.method == "POST":
        username = request.POST.get("userName")
        email = request.POST.get("email")
        password = request.POST.get("password")
        print(f"Received: {username}, {email}, {password}")

        print("✅ DATABASE CONFIG:")
        print(connection.settings_dict)  # <-- This prints DB settings

        if not email or not password:
            messages.error(request, "Email and Password are required.")
            return redirect("error")

        if User.objects.filter(email=email).exists():
            messages.error(request, "Email already exists.")
            return redirect("error")

        if not username:
            username = email.split('@')[0]

        try:
            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()
            print("✅ User created:", user)
            messages.success(request, "Registration successful. Please log in.")
            return redirect("auth")
        except Exception as e:
            print("❌ Error creating user:", e)
            messages.error(request, "Something went wrong.")
            return redirect("error")

   
    return render(request, "user_register.html")
    



def about(request):
    return render(request, 'about.html')

def contact(request):
    context = {"title": "Contact Page"}
    return render(request, 'contact.html', context)

def welcome(request):
    return render(request, 'welcome.html')

def error(request):
    return render(request, 'error.html')

def user_not_exist(request):
    return render(request, 'user_not_exist.html')

