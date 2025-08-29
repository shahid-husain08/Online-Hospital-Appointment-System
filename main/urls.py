from . import views
from django.urls import path , include



urlpatterns = [
    path('', views.home,name="home"),
    path('auth/',views.auth,name="auth"),
    path('user_register/',views.user_register,name="user_register"),
    path('about/',views.about , name="about"),
    path('contact/',views.contact , name="contact"),
    path('welcome/',views.welcome,name="welcome"),
    path('error/',views.error,name="error"),
    path('user_not_exist/',views.user_not_exist, name="user_not_exist"),
    path('', include('patiant.urls')),
    path('', include('adminpanel.urls')),
]
