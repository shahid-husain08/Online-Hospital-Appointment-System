from . import views
from django.urls import path , include



urlpatterns = [
    path('adminpanel_login/', views.adminpanel_login, name='adminpanel_login'),
    path('reception_dashboard/', views.adminpanel, name="adminpanel_dashboard"),
    path("appointment/accept/<int:appointment_id>/", views.accept_appointment, name="accept_appointment"),
    path("appointment/cancel/<int:appointment_id>/", views.cancel_appointment_admin, name="cancel_appointment_admin"),
    path('adminpanel_logout/', views.adminpanel_logout, name='adminpanel_logout'),

]