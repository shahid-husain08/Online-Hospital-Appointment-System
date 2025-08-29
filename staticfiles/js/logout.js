  
        document.addEventListener('DOMContentLoaded', function() {
            const logoutBtn = document.getElementById('logoutBtn');
            const cancelBtn = document.getElementById('cancelBtn');
            const loading = document.querySelector('.loading');
            const successMessage = document.querySelector('.success-message');
            const logoutContainer = document.querySelector('.logout-container');

            // Cancel button - returns to previous page or home
            cancelBtn.addEventListener('click', function() {
                window.history.back();
            });

            // Logout functionality
            logoutBtn.addEventListener('click', function() {
                // Show loading state
                logoutBtn.disabled = true;
                loading.style.display = 'flex';
                
                // Simulate logout process
                setTimeout(function() {
                    // Hide loading, show success
                    loading.style.display = 'none';
                    successMessage.style.display = 'block';
                    
                    // Disable both buttons
                    logoutBtn.disabled = true;
                    cancelBtn.disabled = true;
                    
                    // Update container styling
                    logoutContainer.style.opacity = '0.9';
                    logoutContainer.style.transform = 'scale(0.98)';
                    
                    // Simulate redirect after 2 seconds
                    setTimeout(function() {
                        // In a real application, this would redirect to login page
                        console.log('Redirecting to login page...');
                        // window.location.href = '/login';
                        
                        // For demo purposes, we'll just reload
                        alert('Logout successful! In a real app, this would redirect to login.');
                        window.location.reload();
                    }, 2000);
                }, 1500); // Simulate API call delay
            });
        });
    