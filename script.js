// Mobile menu functionality
let isMobileMenuOpen = false;

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    const closeX = document.getElementById('close-x');
    
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('active');
        hamburger.style.display = 'none';
        closeX.style.display = 'block';
    } else {
        mobileMenu.classList.remove('active');
        hamburger.style.display = 'block';
        closeX.style.display = 'none';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    const closeX = document.getElementById('close-x');
    
    isMobileMenuOpen = false;
    mobileMenu.classList.remove('active');
    hamburger.style.display = 'block';
    closeX.style.display = 'none';
    
    // Close any open submenus
    const submenus = document.querySelectorAll('.mobile-submenu');
    const arrows = document.querySelectorAll('.mobile-dropdown-arrow');
    submenus.forEach(submenu => submenu.classList.remove('active'));
    arrows.forEach(arrow => arrow.classList.remove('active'));
}

function toggleMobileSubmenu(event, submenuId) {
    event.preventDefault();
    event.stopPropagation();
    
    const submenu = document.getElementById(submenuId);
    const arrow = event.currentTarget.querySelector('.mobile-dropdown-arrow');
    
    // Toggle the clicked submenu
    submenu.classList.toggle('active');
    arrow.classList.toggle('active');
    
    // Close other submenus
    const allSubmenus = document.querySelectorAll('.mobile-submenu');
    const allArrows = document.querySelectorAll('.mobile-dropdown-arrow');
    
    allSubmenus.forEach((menu) => {
        if (menu.id !== submenuId) {
            menu.classList.remove('active');
        }
    });
    
    allArrows.forEach((arr) => {
        if (arr !== arrow) {
            arr.classList.remove('active');
        }
    });
}

// Smooth scrolling functions
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

// Modal functionality
function openConsultationModal() {
    const modal = document.getElementById('consultationModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeConsultationModal() {
    const modal = document.getElementById('consultationModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeConsultationModal();
    }
});

// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('contactSubmitBtn');
    const submitText = document.getElementById('contactSubmitText');
    const submitIcon = document.getElementById('contactSubmitIcon');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                company: formData.get('company'),
                phone: formData.get('phone'),
                service: formData.get('service'),
                message: formData.get('message')
            };
            
            // Disable submit button and show loading state
            submitBtn.disabled = true;
            submitText.textContent = 'Sending...';
            submitIcon.textContent = '⏳';
        
        try {
            // Simulate API call (replace with actual Discord webhook URL)
            const webhookUrl = 'DISCORD_HOOK';
            
            const payload = {
                content: `New contact form submission:
**Name:** ${data.name}
**Email:** ${data.email}
**Message:** ${data.message}`
            };
            
            // For demo purposes, we'll simulate the webhook call
            console.log('Would send to Discord webhook:', payload);
            
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message
            showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
            
        } catch (error) {
            console.error('Error sending message:', error);
            showToast('Failed to send message. Please try again.', 'error');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitText.textContent = 'Send Message';
            submitIcon.textContent = '📨';
        }
    });
    
    // Consultation form handler
    const consultationForm = document.getElementById('consultationForm');
    const consultationSubmitBtn = document.getElementById('consultationSubmitBtn');
    const consultationSubmitText = document.getElementById('consultationSubmitText');
    const consultationSubmitIcon = document.getElementById('consultationSubmitIcon');
    
    if (consultationForm) {
        consultationForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(consultationForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                service: formData.get('service'),
                message: formData.get('message')
            };
            
            // Disable submit button and show loading state
            consultationSubmitBtn.disabled = true;
            consultationSubmitText.textContent = 'Sending...';
            consultationSubmitIcon.textContent = '⏳';
            
            try {
                // Simulate API call
                const webhookUrl = 'DISCORD_HOOK';
                
                const payload = {
                    content: `New consultation request:
**Name:** ${data.name}
**Email:** ${data.email}
**Phone:** ${data.phone || 'Not provided'}
**Service:** ${data.service}
**Message:** ${data.message}`
                };
                
                console.log('Would send to Discord webhook:', payload);
                
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Show success message
                showToast('Consultation request sent! We\'ll contact you within 24 hours.', 'success');
                
                // Reset form and close modal
                consultationForm.reset();
                setTimeout(closeConsultationModal, 1500);
                
            } catch (error) {
                console.error('Error sending consultation request:', error);
                showToast('Failed to send request. Please try again.', 'error');
            } finally {
                // Reset button state
                consultationSubmitBtn.disabled = false;
                consultationSubmitText.textContent = 'Request Consultation';
                consultationSubmitIcon.textContent = '📅';
            }
        });
    }
});

// Toast notification function
function showToast(message, type) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show';
    
    if (type === 'error') {
        toast.style.background = '#ef4444';
    } else {
        toast.style.background = '#10b981';
    }
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Smooth scrolling for all anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Get all links that point to sections
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Close mobile menu if open
                if (isMobileMenuOpen) {
                    closeMobileMenu();
                }
            }
        });
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Desktop dropdown keyboard navigation
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link-dropdown');
        const menu = dropdown.querySelector('.dropdown-menu');
        let isOpen = false;
        
        // Handle keyboard navigation
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                isOpen = !isOpen;
                menu.style.opacity = isOpen ? '1' : '0';
                menu.style.visibility = isOpen ? 'visible' : 'hidden';
                menu.style.transform = isOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-10px)';
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target) && isOpen) {
                isOpen = false;
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.transform = 'translateX(-50%) translateY(-10px)';
            }
        });
    });
});

// Image fallback functionality
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        const isDynamics = /dynamics\s*365/i.test(img.alt || '');

        img.addEventListener('error', function onImgError() {
            // Try Dynamics 365 official icon CDN first if relevant, then generic Microsoft logo
            if (isDynamics && this.dataset.dynamicsTried !== '1') {
                this.dataset.dynamicsTried = '1';
                this.src = 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product/svg/dynamics365_48x1.svg';
                return;
            }
            if (this.dataset.genericTried !== '1') {
                this.dataset.genericTried = '1';
                this.src = 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg';
                return;
            }
            this.style.opacity = '0.3';
            this.alt = 'Image not available';
        });

        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});

// Add loading animation to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Intersection Observer for fade-in animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const elements = document.querySelectorAll('.service-card, .product-card, .team-card, .contact-card');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to cards
    const cards = document.querySelectorAll('.service-card, .product-card, .team-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Testimonial Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-card');
    const indicators = document.querySelectorAll('.indicator');
    const totalTestimonials = testimonials.length;
    
    // Function to show a specific testimonial
    function showTestimonial(index) {
        // Remove active class from all testimonials and indicators
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to current testimonial and indicator
        testimonials[index].classList.add('active');
        indicators[index].classList.add('active');
        
        currentTestimonial = index;
    }
    
    // Function to go to next testimonial
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }
    
    // Function to go to specific testimonial (for indicators)
    window.goToTestimonial = function(index) {
        showTestimonial(index);
        // Reset the interval when user manually selects
        clearInterval(autoRotate);
        autoRotate = setInterval(nextTestimonial, 5000);
    }
    
    // Auto-rotate testimonials every 5 seconds
    let autoRotate = setInterval(nextTestimonial, 5000);
    
    // Pause rotation on hover
    const carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', function() {
            clearInterval(autoRotate);
        });
        
        carousel.addEventListener('mouseleave', function() {
            autoRotate = setInterval(nextTestimonial, 5000);
        });
    }
    
    // Add testimonial cards to intersection observer for fade-in animation
    const testimonialObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const testimonialsSection = document.querySelector('.testimonials');
    if (testimonialsSection) {
        testimonialsSection.style.opacity = '0';
        testimonialsSection.style.transform = 'translateY(20px)';
        testimonialsSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        testimonialObserver.observe(testimonialsSection);
    }
});