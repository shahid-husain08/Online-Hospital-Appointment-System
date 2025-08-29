
  




        document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    // ❌ Remove e.preventDefault() so the form submits
    // e.preventDefault();
    const patiantname = document.getElementById('patiantname').value;
    const mobieno = document.getElementById('mobileno').value;
    const department = document.getElementById('department').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if ( !patiantname || !mobieno || !department || !doctor || !date || !time) {
        e.preventDefault(); // ✅ Only prevent if validation fails
        alert('Please fill in all required fields.');
        return;
    }
    // ✅ Do NOT use alert or reset form
});




        
        // Dynamic doctor selection based on department
        document.getElementById('department').addEventListener('change', function() {
            const department = this.value;
            const doctorSelect = document.getElementById('doctor');
            
            // Clear previous options
            doctorSelect.innerHTML = '<option value="">Select Doctor</option>';
            
            // Add doctors based on department
            if (department === 'Cardiology') {
                doctorSelect.innerHTML += `
                    <option >Dr. Ahesan Ali</option>
                    <option>Dr. Bakar Ali</option>
                `;
            } else if (department === 'Neurology') {
                doctorSelect.innerHTML += `
                    <option>Dr. Abid Husain</option>
                `;
            } else if (department === 'Orthopedics') {
                doctorSelect.innerHTML += `
                    <option>Dr. Rajesh</option>
                    <option >Dr. Mohammad Ali</option>
                `;
            } else if (department === 'Pediatrics') {
                doctorSelect.innerHTML += `
                    <option >Dr. Mohsin Ali</option>
                    <option >Dr. Mahedi</option>
                `;
            } else if (department === 'Dermatology') {
                doctorSelect.innerHTML += `
                    <option >Dr. Jisan Ali</option>
                `;
            }
        });
    