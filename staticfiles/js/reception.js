 
        // Update current time and date
        function updateDateTime() {
            const now = new Date();
            
            // Format time
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = hours % 12 || 12;
            const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
            document.getElementById('current-time').textContent = `${formattedHours}:${formattedMinutes} ${ampm}`;
            
            // Format date
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = now.toLocaleDateString('en-US', options);
            document.getElementById('current-date').textContent = formattedDate;
        }

        // Initialize and update time every minute
        updateDateTime();
        setInterval(updateDateTime, 60000);

        // Tab switching functionality
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all content sections
                document.querySelectorAll('.appointment-list').forEach(section => {
                    section.classList.add('hidden');
                });
                
                // Show the corresponding content section
                const tabId = this.getAttribute('data-tab');
                document.getElementById(`${tabId}-tab`).classList.remove('hidden');
            });
        });

        // Appointment action handlers
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('btn-accept')) {
                const card = e.target.closest('.appointment-card');
                card.querySelector('.appointment-status').className = 'appointment-status status-accepted';
                card.querySelector('.appointment-status').textContent = 'Accepted';
                alert('Appointment accepted successfully!');
                updateStats('accepted');
            }
            
            if (e.target.classList.contains('btn-cancel')) {
                const reason = prompt('Please enter the cancellation reason:');
                if (reason) {
                    const card = e.target.closest('.appointment-card');
                    card.querySelector('.appointment-status').className = 'appointment-status status-cancelled';
                    card.querySelector('.appointment-status').textContent = 'Cancelled';
                    
                    // Add cancellation reason if not already present
                    if (!card.querySelector('[data-cancellation-reason]')) {
                        const detailsContainer = card.querySelector('.appointment-details');
                        const reasonItem = document.createElement('div');
                        reasonItem.className = 'detail-item';
                        reasonItem.innerHTML = `
                            <p>Cancellation Reason</p>
                            <p>${reason}</p>
                        `;
                        detailsContainer.appendChild(reasonItem);
                    }
                    
                    alert('Appointment cancelled successfully!');
                    updateStats('cancelled');
                }
            }
            
            if (e.target.classList.contains('btn-view')) {
                const card = e.target.closest('.appointment-card');
                const id = card.querySelector('.appointment-id').textContent;
                alert(`Viewing details for appointment ${id}`);
                // In a real implementation, this would open a modal with detailed view
            }
        });

        // Search functionality
        document.querySelector('.search-input').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const activeTab = document.querySelector('.tab.active').getAttribute('data-tab');
            const cards = document.querySelectorAll(`#${activeTab}-tab .appointment-card`);
            
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    card.style.display = 'grid';
                } else {
                    card.style.display = 'none';
                }
            });
        });

        // Filter functionality
        document.querySelector('.filter-select').addEventListener('change', function(e) {
            const filterValue = e.target.value;
            const activeTab = document.querySelector('.tab.active').getAttribute('data-tab');
            const cards = document.querySelectorAll(`#${activeTab}-tab .appointment-card`);
            
            if (filterValue === 'all') {
                cards.forEach(card => card.style.display = 'grid');
                return;
            }
            
            cards.forEach(card => {
                const status = card.querySelector('.appointment-status').textContent.toLowerCase();
                if (status === filterValue) {
                    card.style.display = 'grid';
                } else {
                    card.style.display = 'none';
                }
            });
        });

        // Update stats counters (simplified for demo)
        function updateStats(type) {
            const statCards = document.querySelectorAll('.stat-card');
            
            statCards.forEach(card => {
                const countElement = card.querySelector('p');
                let count = parseInt(countElement.textContent);
                
                if (card.classList.contains(type)) {
                    countElement.textContent = count + 1;
                }
                
                if (card.classList.contains('total') && type === 'accepted') {
                    countElement.textContent = count + 1;
                }
                
                if (card.classList.contains('pending') && (type === 'accepted' || type === 'cancelled')) {
                    if (count > 0) {
                        countElement.textContent = count - 1;
                    }
                }
            });
            
            // Update tab counts
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => {
                const countElement = document.querySelector(`.stat-card.${tab.getAttribute('data-tab')} p`);
                const count = parseInt(countElement.textContent);
                tab.textContent = `${tab.textContent.split('(')[0].trim()} (${count})`;
            });
        }
    