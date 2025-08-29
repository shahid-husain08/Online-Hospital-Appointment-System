  
    
        // Tab switching functionality
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all tab contents
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.style.display = 'none';
                });
                
                // Show the selected tab content
                const tabName = this.getAttribute('data-tab');
                document.getElementById(tabName + 'Tab').style.display = 'block';
            });
        });
        
        // Sample cancel appointment functionality
        document.querySelectorAll('.btn-danger').forEach(btn => {
            btn.addEventListener('click', function() {
                if (confirm('Are you sure you want to cancel this appointment?')) {
                    alert('Appointment cancelled successfully.');
                    // In a real app, you would update the UI and send request to server
                }
            });
        });

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = "none");
    document.getElementById(tabId).style.display = "block";
}
     