
// Form validation on submit
const form = document.getElementById('patientRegistrationForm');
form.addEventListener('submit', (e) => {
  // Clear previous messages
  [...form.querySelectorAll('small')].forEach(s => {
    s.style.color = 'transparent';
    s.textContent = s.getAttribute('aria-describedby') || s.textContent;
  });

  let valid = true;

  // Validate full name (at least 2 words maybe)
  const fullName = form.fullName.value.trim();
  if (fullName.length < 3 || fullName.split(' ').length < 2) {
    showError('fullNameHelp', 'Please enter your full name (first and last).');
    valid = false;
  }

  // Validate email pattern with HTML5 constraints plus extra check
  const email = form.email.value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('emailHelp', 'Please enter a valid email address.');
    valid = false;
  }

  // Validate password length min 6
  const password = form.password.value;
  if (!password || password.length < 6) {
    showError('passwordHelp', 'Password must be at least 6 characters.');
    valid = false;
  }

  // Confirm password matches password
  const confirmPassword = form.confirmPassword.value;
  if (confirmPassword !== password || confirmPassword === '') {
    showError('confirmPasswordHelp', 'Passwords do not match.');
    valid = false;
  }

  // Validate mobile number with simple pattern (7-20 digits, spaces, +, - allowed)
  const mobile = form.mobileNumber.value.trim();
  const mobilePattern = /^[0-9\s\-\+\(\)]{7,20}$/;
  if (!mobilePattern.test(mobile)) {
    showError('mobileHelp', 'Please enter a valid mobile number.');
    valid = false;
  }

  // 🔥 Allow submission ONLY if validation passes


  function showError(id, message) {
    const elem = document.getElementById(id);
    elem.style.color = '#d93025'; // red color for errors
    elem.textContent = message;
  }
});
