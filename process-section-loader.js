// Process Section Loader - Ensures smooth loading and rendering
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        initializeProcessSections();
    });
    
    function initializeProcessSections() {
        const processSections = document.querySelectorAll('.process-section');
        
        processSections.forEach(section => {
            // Remove loading class if present
            section.classList.remove('loading');
            
            // Observe the section for visibility
            observeSection(section);
            
            // Add keyboard navigation
            addKeyboardNavigation(section);
        });
    }
    
    function observeSection(section) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger animations when section comes into view
                    const steps = entry.target.querySelectorAll('.process-step');
                    steps.forEach((step, index) => {
                        // Re-trigger animation for better visibility
                        step.style.animationDelay = `${index * 0.1}s`;
                        step.classList.add('animate-in');
                    });
                    
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        observer.observe(section);
    }
    
    function addKeyboardNavigation(section) {
        const steps = section.querySelectorAll('.process-step');
        
        steps.forEach((step, index) => {
            // Make steps focusable
            step.setAttribute('tabindex', '0');
            
            // Add keyboard event handlers
            step.addEventListener('keydown', (e) => {
                switch(e.key) {
                    case 'ArrowRight':
                    case 'ArrowDown':
                        e.preventDefault();
                        if (index < steps.length - 1) {
                            steps[index + 1].focus();
                        }
                        break;
                    case 'ArrowLeft':
                    case 'ArrowUp':
                        e.preventDefault();
                        if (index > 0) {
                            steps[index - 1].focus();
                        }
                        break;
                }
            });
        });
    }
    
    // Handle window resize for responsive updates
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            updateProcessSections();
        }, 250);
    });
    
    function updateProcessSections() {
        const processSections = document.querySelectorAll('.process-section');
        processSections.forEach(section => {
            const timeline = section.querySelector('.process-timeline');
            if (timeline) {
                // Force reflow for proper rendering
                timeline.style.display = 'none';
                timeline.offsetHeight; // Trigger reflow
                timeline.style.display = '';
            }
        });
    }
    
    // Ensure images and fonts are loaded before animations
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeProcessSections);
    } else {
        initializeProcessSections();
    }
})();