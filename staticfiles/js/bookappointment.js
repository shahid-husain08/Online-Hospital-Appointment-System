
  




        document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    // ❌ Remove e.preventDefault() so the form submits
    // e.preventDefault();

    const department = document.getElementById('department').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!department || !doctor || !date || !time) {
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
            if (department === 'cardiology') {
                doctorSelect.innerHTML += `
                    <option value="dr_smith">Dr. Smith</option>
                    <option value="dr_jones">Dr. Jones</option>
                `;
            } else if (department === 'neurology') {
                doctorSelect.innerHTML += `
                    <option value="dr_johnson">Dr. Johnson</option>
                `;
            } else if (department === 'orthopedics') {
                doctorSelect.innerHTML += `
                    <option value="dr_williams">Dr. Williams</option>
                    <option value="dr_davis">Dr. Davis</option>
                `;
            } else if (department === 'pediatrics') {
                doctorSelect.innerHTML += `
                    <option value="dr_brown">Dr. Brown</option>
                    <option value="dr_miller">Dr. Miller</option>
                `;
            } else if (department === 'dermatology') {
                doctorSelect.innerHTML += `
                    <option value="dr_wilson">Dr. Wilson</option>
                `;
            }
        });
    