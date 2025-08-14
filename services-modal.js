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
    
    // Discord Webhook URL
    const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1320210251257221190/gEc8TpGPMgFZ4bqDLiPjOTIHKYCZGVp5Y_FIRnHtn7edZYnt3jx2A0bJbqxRFy-34IDk";
    
    // Simple Email Pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (consultationForm) {
        consultationForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(consultationForm);
            const nameValue = formData.get('name').trim();
            const emailValue = formData.get('email').trim();
            const phoneValue = formData.get('phone') ? formData.get('phone').trim() : '';
            const serviceValue = formData.get('service');
            const messageValue = formData.get('message').trim();
            
            // 1. Basic Validation Checks
            if (!nameValue || !emailValue || !messageValue) {
                showToast('Please fill out all fields (Name, Email, and Message).', 'error');
                return;
            }
            
            // 2. Email Format Check
            if (!emailPattern.test(emailValue)) {
                showToast('Please enter a valid email address.', 'error');
                return;
            }
            
            // Disable submit button and show loading state
            consultationSubmitBtn.disabled = true;
            consultationSubmitText.textContent = 'Sending...';
            consultationSubmitIcon.textContent = '⏳';
            
            try {
                const payload = {
                    content: `🔔 **New Consultation Request from Service Page**
                    
**Name:** ${nameValue}
**Email:** ${emailValue}
**Phone:** ${phoneValue || 'Not provided'}
**Service:** ${serviceValue}
**Message:** ${messageValue}
**Date/Time:** ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })}
**Source:** Service Page Consultation Form`
                };
                
                const response = await fetch(DISCORD_WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload)
                });
                
                console.log('Consultation response status:', response.status);
                
                if (response.ok) {
                    showToast('Thank you! Your consultation request has been sent successfully. We\'ll contact you within 24 hours.', 'success');
                    consultationForm.reset(); // Clear the form fields
                    setTimeout(closeConsultationModal, 1500);
                } else {
                    const errorText = await response.text();
                    console.error('Discord webhook error:', response.status, errorText);
                    showToast('Oops! Something went wrong. Please try again later.', 'error');
                }
                
            } catch (error) {
                console.error('Error sending consultation request:', error);
                showToast('Error sending your consultation request. Please try again later.', 'error');
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