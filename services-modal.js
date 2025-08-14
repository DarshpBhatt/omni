// Modal functionality for service pages
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

// Consultation form handler
document.addEventListener('DOMContentLoaded', function() {
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

// Update scrollToContact function to open modal
function scrollToContact() {
    openConsultationModal();
}