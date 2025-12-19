// Smooth scrolling for anchor links (only on same page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        // Only prevent default if it's an anchor on the same page
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) navMenu.classList.remove('active');
        }
    });
});

// Set active navigation link based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        // Remove active class from all links
        link.classList.remove('active');
        
        // Set active if it matches current page
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Modal functionality - Donate buttons
const donateBtns = document.querySelectorAll('.donate-btn, .btn-donate-form');
const donateModal = document.getElementById('donate');
const volunteerBtns = document.querySelectorAll('.volunteer-popup-btn, .btn-volunteer-form');
const volunteerModal = document.getElementById('volunteer');
const modalClose = document.querySelectorAll('.modal-close');

// Handle all donate button clicks
donateBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (donateModal) {
            donateModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Handle all volunteer button clicks
volunteerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // If the button links to get-involved.html, allow normal navigation
        if (btn.getAttribute('href') === 'get-involved.html' || btn.getAttribute('href')?.includes('get-involved.html')) {
            return; // Allow default navigation
        }
        e.preventDefault();
        if (volunteerModal) {
            volunteerModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal functionality
modalClose.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal');
        if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        }
    });
    });

// Close modal when clicking outside
    window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and content blocks
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.leadership-card, .priority-card, .involvement-card, .content-block'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form submission handling
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const formSuccessModal = document.getElementById('formSuccess');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show success modal
            if (formSuccessModal) {
                formSuccessModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
            
            // Reset form
            this.reset();
            
            // In a real implementation, you would send this to your backend:
            // fetch('/api/signup', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if (formSuccessModal) {
            //         formSuccessModal.style.display = 'block';
            //         document.body.style.overflow = 'hidden';
            //     }
            //     signupForm.reset();
            // })
            // .catch(error => {
            //     alert('There was an error. Please try again.');
            // });
        });
    }
});

// Close form success modal
function closeFormSuccess() {
    const formSuccessModal = document.getElementById('formSuccess');
    if (formSuccessModal) {
        formSuccessModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close form success modal with X button
document.addEventListener('DOMContentLoaded', () => {
    const formSuccessModal = document.getElementById('formSuccess');
    if (formSuccessModal) {
        const closeBtn = formSuccessModal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                formSuccessModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }
        
        // Close when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === formSuccessModal) {
                formSuccessModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Volunteer form submission
    const volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(volunteerForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const events = formData.getAll('events');
            const message = formData.get('message');
            
            // Validate that at least one event is selected
            if (events.length === 0) {
                alert('Please select at least one event to volunteer for.');
                return;
            }
            
            // Create email body
            const emailBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nEvents Selected:\n${events.join('\n')}\n\nAdditional Information:\n${message || 'None'}`;
            const emailSubject = `Volunteer Sign-Up: ${name}`;
            const mailtoLink = `mailto:campaign@shwetapadmanabha.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Close modal and show success message
            const volunteerModal = document.getElementById('volunteer');
            if (volunteerModal) {
                volunteerModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            
            alert('Thank you for volunteering! Your email client should open. If it doesn\'t, please email us at campaign@shwetapadmanabha.com');
            
            // Reset form
            volunteerForm.reset();
        });
    }
});

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Get all elements to animate
    const scrollingText = document.querySelector('.scrolling-text');
    const scrollingImages = document.querySelector('.scrolling-images');
    const collageItems = document.querySelectorAll('.collage-item');
    const brushstrokes = document.querySelectorAll('.brushstroke');
    
    // Observe elements
    if (scrollingText) {
        scrollObserver.observe(scrollingText);
    }
    
    if (scrollingImages) {
        scrollObserver.observe(scrollingImages);
    }
    
    collageItems.forEach(item => {
        scrollObserver.observe(item);
    });
    
    brushstrokes.forEach(stroke => {
        scrollObserver.observe(stroke);
    });
}

// Handle image animation sequence - appear, come together, then disperse
function handleImageAnimationSequence() {
    const imageCollage = document.querySelector('.image-collage');
    const brushstrokes = document.querySelectorAll('.brushstroke');
    
    if (!imageCollage) return;
    
    // When images are animated (visible), start the sequence
    const sequenceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Wait for images to come together (3.5 seconds), then disperse
                setTimeout(() => {
                    imageCollage.classList.add('dispersed');
                    
                    // Fade out brushstrokes smoothly
                    brushstrokes.forEach(stroke => {
                        stroke.style.transition = 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1)';
                        stroke.style.opacity = '0';
                    });
                }, 3500); // Start dispersing after 3.5 seconds (when animation is at ~58%)
                
                sequenceObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    sequenceObserver.observe(imageCollage);
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initScrollAnimations();
        handleImageAnimationSequence();
    });
} else {
    initScrollAnimations();
    handleImageAnimationSequence();
}

