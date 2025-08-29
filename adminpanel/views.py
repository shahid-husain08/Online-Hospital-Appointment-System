from django.shortcuts import render , redirect , get_object_or_404
from django.contrib import messages
from django.contrib.auth.hashers import check_password
from .models import Adminpanel
from patiant.models import Appointment
# Create your views here.

def adminpanel(request):
    if "adminpanel_id" not in request.session:
        return redirect('adminpanel_login')
    
    pending = Appointment.objects.filter(status="pending")
    accepted = Appointment.objects.filter(status="accepted")
    cancelled = Appointment.objects.filter(status="cancelled")

    context = {
        "pending": pending,
        "accepted": accepted,
        "cancelled": cancelled,
        "total_count": Appointment.objects.count(),
        "pending_count": pending.count(),
        "accepted_count": accepted.count(),
        "cancelled_count": cancelled.count(),
    }

    
    return render(request, 'adminpanel.html' , context)

def accept_appointment(request, appointment_id):
    app = get_object_or_404(Appointment, id=appointment_id)
    app.status = "accepted"
    app.save()
    return redirect("adminpanel_dashboard")  # Redirect back to reception dashboard


def cancel_appointment_admin(request, appointment_id):
    app = get_object_or_404(Appointment, id=appointment_id)
    app.status = "cancelled"
    app.cancel_reason = "Cancelled by Receptionist"
    app.save()
    return redirect("adminpanel_dashboard")



def adminpanel_login(request):
    if request.method == "POST":
        email = request.POST.get("admin_email")
        password = request.POST.get("admin_password")

        try:
            admin_user = Adminpanel.objects.get(email=email)
            
            # If your passwords are hashed
            if check_password(password, admin_user.password):
                request.session["adminpanel_id"] = admin_user.id
                request.session["adminpanel_name"] = admin_user.full_name
                return redirect("adminpanel_dashboard")
            else:
                messages.error(request, "Invalid password!")
                return redirect("user_not_exist")

        except Adminpanel.DoesNotExist:
            messages.error(request, "Admin account not found!")
            return redirect("user_not_exist")

    return render(request, "login.html")

def adminpanel_logout(request):
    # Clear all session data for the admin
    request.session.flush()
    messages.success(request, "You have been logged out successfully.")
    return redirect("home")
