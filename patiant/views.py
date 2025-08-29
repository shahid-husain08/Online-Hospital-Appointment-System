from django.shortcuts import render , redirect
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from .forms import AppointmentForm
from .models import Appointment
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404





# Create your views here.

@login_required
def index(request):
    user_appointments = Appointment.objects.filter(user=request.user)

    context = {
        "upcoming": user_appointments.filter(status__in=["pending", "accepted"]),
        "accepted": user_appointments.filter(status="accepted"),
        "cancelled": user_appointments.filter(status="cancelled"),
    }
    return render(request, 'index.html', context)


@login_required
def book_appointment(request):
    if request.method == "POST":
        form = AppointmentForm(request.POST)
        if form.is_valid():
            appointment = form.save(commit=False)
            appointment.user = request.user  # ✅ Assign logged-in user
            appointment.save()               # ✅ Save to database
            print("✅ Saved Successfully!")   # Debug
            return redirect('my_appointment')
        else:
            print(form.errors)  # ✅ Debug if form invalid
    else:
        form = AppointmentForm()

    return render(request, 'book-appointment.html', {'form': form})

def my_appointment(request):
   
    appointments = Appointment.objects.filter(user=request.user).order_by('-date', '-time')

    upcoming = appointments.filter(status__in=["pending", "accepted"])
    cancelled = appointments.filter(status="cancelled")
    completed = appointments.filter(status__in=["accepted", "completed"])

    return render(request, "my-appointments.html", {
        "upcoming": upcoming,
        "cancelled": cancelled,
        "completed": completed
    })


def logout_view(request):
    if request.method == "POST":
        logout(request)
        return redirect('login')  # Redirect to main app's login page
    return render(request,'logout.html')  # Show confirmation page



@login_required
def cancel_appointment(request, appointment_id,):
    
    appointment = get_object_or_404(Appointment, id=appointment_id ,  user=request.user)
    appointment.status = "cancelled"
    appointment.save()
    return redirect("my_appointment")

@login_required
def reschedule_appointment(request, appointment_id):
    appointment = get_object_or_404(Appointment, id=appointment_id, user=request.user)

    if request.method == "POST":
        form = AppointmentForm(request.POST, instance=appointment)
        if form.is_valid():
            form.save()
            return redirect('my_appointment')
    else:
        form = AppointmentForm(instance=appointment)

    return render(request, 'book-appointment.html', {'form': form, 'reschedule': True})

