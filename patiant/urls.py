from . import views
from django.urls import path , include
from django.contrib.auth import views as auth_views



urlpatterns = [
    path('index/',views.index, name="index"),
    path('book_appointment/',views.book_appointment,name="book_appointment"),
    path('my_appointment/',views.my_appointment,name="my_appointment"),
    path("cancel/<int:appointment_id>/", views.cancel_appointment, name="cancel_appointment"),
    path('reschedule/<int:appointment_id>/', views.reschedule_appointment, name='reschedule_appointment'),
    path('logout/', views.logout_view, name='logout'),
    path('', include('adminpanel.urls')),
] 