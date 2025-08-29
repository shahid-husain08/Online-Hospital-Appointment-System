 
        // Mobile menu toggle
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const nav = document.querySelector('nav');
        
        mobileMenuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

      
        // Add fade-in animation to elements as they scroll into view
        const fadeElements = document.querySelectorAll('.feature-card, .service-card');
        
        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    fadeInObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(element => {
            fadeInObserver.observe(element);
        });


        


        
        