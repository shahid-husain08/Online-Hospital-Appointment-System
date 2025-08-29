
        // Function to show specific content and hide others
        function showContent(pageId) {
            // Hide all content sections
            const contents = document.querySelectorAll('.content');
            contents.forEach(content => {
                content.classList.remove('active');
            });
           // Deactivate all nav links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Show selected content
            const activeContent = document.getElementById(pageId);
            if (activeContent) {
                activeContent.classList.add('active');
            }

             // Activate clicked nav link
            event.target.classList.add('active');
            // Close mobile menu if open
            const navLinksElement = document.querySelector('.nav-links');
            if (navLinksElement.classList.contains('show')) {
                navLinksElement.classList.remove('show');
            }
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

    // Show default page (Home) when page loads
    document.addEventListener('DOMContentLoaded', function () {
        showContent('home');
    });

    // Function to toggle mobile menu
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    }

    document.addEventListener('DOMContentLoaded', function () {
        // Tab switching functionality
        const tabBtns = document.querySelectorAll('.tab-btn');
        const authForms = {
            'patient': document.getElementById('patient-login-form'),
            'doctor': document.getElementById('doctor-login-form'),
            'admin': document.getElementById('admin-login-form')
        };

        tabBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const tabId = this.getAttribute('data-tab');

                // Update active tab
                tabBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                // Hide all forms
                for (const form in authForms) {
                    authForms[form].classList.add('hidden');
                }

                // Show selected form
                authForms[tabId].classList.remove('hidden');
            });
        });

        // Toggle between patient login and register forms
        const switchToRegister = document.getElementById('switch-to-register');
        const switchToLogin = document.getElementById('switch-to-login');
        const patientLoginForm = document.getElementById('patient-login-form');
        const patientRegisterForm = document.getElementById('patient-register-form');

        switchToRegister.addEventListener('click', function (e) {
            e.preventDefault();
            patientLoginForm.classList.add('hidden');
            patientRegisterForm.classList.remove('hidden');
        });

        switchToLogin.addEventListener('click', function (e) {
            e.preventDefault();
            patientRegisterForm.classList.add('hidden');
            patientLoginForm.classList.remove('hidden');
        });

        


        // Form validation for patient login
        const patientLoginFormElement = document.getElementById('patient-login');
        patientLoginFormElement.addEventListener('submit', function (e) {
            // e.preventDefault();

            const email = document.getElementById('patient-email').value;
            const password = document.getElementById('patient-password').value;
            let isValid = true;

            // Email validation
            if (!validateEmail(email)) {
                document.getElementById('patient-email-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('patient-email-error').style.display = 'none';
            }

            // Password validation
            if (password.length < 8) {
                document.getElementById('patient-password-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('patient-password-error').style.display = 'none';
            }

            if (isValid) {
                // Simulate login - in a real app, this would make an API call
                alert('Patient login successful! Redirecting to patient dashboard...');
                // window.location.href = 'patient-dashboard.html';
            }
        });

        // Form validation for patient registration
        const patientRegisterFormElement = document.getElementById('patient-register');
        patientRegisterFormElement.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('patient-register-name').value;
            const email = document.getElementById('patient-register-email').value;
            const password = document.getElementById('patient-register-password').value;
            const confirmPassword = document.getElementById('patient-register-confirm').value;
            const phone = document.getElementById('patient-phone').value;
            let isValid = true;

            // Name validation
            if (name.trim() === '') {
                document.getElementById('patient-name-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('patient-name-error').style.display = 'none';
            }

            // Email validation
            if (!validateEmail(email)) {
                document.getElementById('patient-register-email-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('patient-register-email-error').style.display = 'none';
            }

            // Password validation
            if (password.length < 8) {
                document.getElementById('patient-register-password-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('patient-register-password-error').style.display = 'none';
            }

            // Confirm password validation
            if (password !== confirmPassword) {
                document.getElementById('patient-register-confirm-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('patient-register-confirm-error').style.display = 'none';
            }

            // Phone validation (simple check)
            if (phone.trim() === '' || phone.length < 10) {
                document.getElementById('patient-phone-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('patient-phone-error').style.display = 'none';
            }

            if (isValid) {
                // Simulate registration - in a real app, this would make an API call
                alert('Registration successful! Please verify your email address.');
                // Reset form and switch to login
                patientRegisterFormElement.reset();
                patientRegisterForm.classList.add('hidden');
                patientLoginForm.classList.remove('hidden');
            }
        });

        // Form validation for doctor login
        const doctorLoginFormElement = document.getElementById('doctor-login');
        doctorLoginFormElement.addEventListener('submit', function (e) {
            e.preventDefault();

            const doctorId = document.getElementById('doctor-id').value;
            const password = document.getElementById('doctor-password').value;
            let isValid = true;

            // Doctor ID validation
            if (doctorId.trim() === '') {
                document.getElementById('doctor-id-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('doctor-id-error').style.display = 'none';
            }

            // Password validation
            if (password.length < 8) {
                document.getElementById('doctor-password-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('doctor-password-error').style.display = 'none';
            }

            if (isValid) {
                // Simulate login - in a real app, this would make an API call
                alert('Doctor login successful! Redirecting to doctor dashboard...');
                // window.location.href = 'doctor-dashboard.html';
            }
        });

        // Form validation for admin login
        const adminLoginFormElement = document.getElementById('admin-login');
        adminLoginFormElement.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('admin-username').value;
            const password = document.getElementById('admin-password').value;
            let isValid = true;

            // Username validation
            if (username.trim() === '') {
                document.getElementById('admin-username-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('admin-username-error').style.display = 'none';
            }

            // Password validation (stricter for admin)
            if (password.length < 10) {
                document.getElementById('admin-password-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('admin-password-error').style.display = 'none';
            }

            if (isValid) {
                // Simulate login - in a real app, this would make an API call
                alert('Admin login successful! Redirecting to admin panel...');
                // window.location.href = 'admin-panel.html';
            }
        });

        // Email validation helper function
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    });
