/*
Professional Portfolio Website JavaScript
Designed for Nambasa Daphine - Human Resource Manager
All rights reserved by Nambasa Daphine

Developer: Ainebye Martin
Client: Nambasa Daphine
Project: Professional Portfolio Website

Custom JavaScript for interactive features
Modern animations and user interactions
*/
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Advanced Particle System
class ParticleSystem {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        this.init();
    }

    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1';
        this.canvas.style.opacity = '0.6';
        document.body.appendChild(this.canvas);
        
        this.resize();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            if (particle.x < 0 || particle.x > this.canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.speedY *= -1;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(74, 144, 226, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Advanced Cursor Effects
class AdvancedCursor {
    constructor() {
        this.cursor = document.createElement('div');
        this.cursorInner = document.createElement('div');
        this.cursorOuter = document.createElement('div');
        this.init();
    }

    init() {
        this.cursor.className = 'advanced-cursor';
        this.cursorInner.className = 'cursor-inner';
        this.cursorOuter.className = 'cursor-outer';
        
        this.cursor.appendChild(this.cursorInner);
        this.cursor.appendChild(this.cursorOuter);
        document.body.appendChild(this.cursor);
        
        this.addEventListeners();
    }

    addEventListeners() {
        document.addEventListener('mousemove', (e) => this.move(e));
        document.addEventListener('mousedown', () => this.down());
        document.addEventListener('mouseup', () => this.up());
        document.addEventListener('mouseleave', () => this.hide());
        document.addEventListener('mouseenter', () => this.show());
    }

    move(e) {
        const x = e.clientX;
        const y = e.clientY;
        
        this.cursorInner.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
        this.cursorOuter.style.transform = `translate(${x - 15}px, ${y - 15}px)`;
    }

    down() {
        this.cursorInner.classList.add('cursor-down');
        this.cursorOuter.classList.add('cursor-down');
    }

    up() {
        this.cursorInner.classList.remove('cursor-down');
        this.cursorOuter.classList.remove('cursor-down');
    }

    hide() {
        this.cursor.style.opacity = '0';
    }

    show() {
        this.cursor.style.opacity = '1';
    }
}

// Magnetic Button Effect
class MagneticButton {
    constructor(element) {
        this.element = element;
        this.init();
    }

    init() {
        this.element.addEventListener('mousemove', (e) => this.move(e));
        this.element.addEventListener('mouseleave', () => this.reset());
    }

    move(e) {
        const rect = this.element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 100;
        const strength = Math.max(0, 1 - distance / maxDistance);
        
        this.element.style.transform = `translate(${x * strength * 0.3}px, ${y * strength * 0.3}px) scale(${1 + strength * 0.05})`;
    }

    reset() {
        this.element.style.transform = 'translate(0, 0) scale(1)';
    }
}

// Initialize advanced cursor
const advancedCursor = new AdvancedCursor();

// Advanced Scroll Animations
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('[data-scroll]');
        this.init();
    }

    init() {
        this.observeElements();
        this.addParallax();
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animated');
                }
            });
        }, { threshold: 0.1 });

        this.elements.forEach(element => {
            observer.observe(element);
        });
    }

    addParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.parallax || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

// Advanced Loading Animation
class LoadingAnimation {
    constructor() {
        this.loader = this.createLoader();
        this.init();
    }

    createLoader() {
        const loader = document.createElement('div');
        loader.className = 'advanced-loader';
        loader.innerHTML = `
            <div class="loader-circle"></div>
            <div class="loader-circle"></div>
            <div class="loader-circle"></div>
        `;
        return loader;
    }

    init() {
        document.body.appendChild(this.loader);
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.loader.classList.add('loader-hidden');
                setTimeout(() => {
                    this.loader.remove();
                }, 500);
            }, 1000);
        });
    }
}

// Initialize scroll animations
const scrollAnimations = new ScrollAnimations();

// Initialize loading animation
const loadingAnimation = new LoadingAnimation();

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('theme-toggle');
const scrollToTopBtn = document.getElementById('scroll-to-top');
const contactForm = document.getElementById('contact-form');
const flashMessages = document.querySelectorAll('.flash-message');
const flashCloseButtons = document.querySelectorAll('.flash-close');

// Typing Animation
const typingTexts = [
    'Strategic HR Planning',
    'Talent Acquisition Specialist',
    'Employee Relations Expert',
    'Organizational Development',
    'Performance Management'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const currentText = typingTexts[textIndex];
    const typingElement = document.querySelector('.typing-text');
    
    if (!typingElement) return;
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeWriter, typingSpeed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter, 1000);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide scroll to top button
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Mobile navigation toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Theme toggle
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
const themeIcon = themeToggle.querySelector('i');
themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / speed;
        
        const updateCounter = () => {
            const current = parseInt(counter.innerText);
            
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer for counter animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    counterObserver.observe(statsSection);
}

// Skill bars animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

// Intersection Observer for skill bars
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// Testimonial slider
const testimonialItems = document.querySelectorAll('.testimonial-item');
const prevBtn = document.getElementById('testimonial-prev');
const nextBtn = document.getElementById('testimonial-next');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length;
    showTestimonial(currentTestimonial);
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevTestimonial);
    nextBtn.addEventListener('click', nextTestimonial);
}

// Auto-rotate testimonials
setInterval(nextTestimonial, 5000);

// Contact form handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Submit form
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Reset form
            contactForm.reset();
            
            // Show success message
            showFlashMessage('Thank you for your message! I will get back to you soon.', 'success');
        })
        .catch(error => {
            // Show error message
            showFlashMessage('An error occurred. Please try again.', 'error');
        })
        .finally(() => {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    });
}

// Flash message handling
function showFlashMessage(message, type) {
    const flashContainer = document.querySelector('.flash-messages') || createFlashContainer();
    
    const flashMessage = document.createElement('div');
    flashMessage.className = `flash-message flash-${type}`;
    flashMessage.innerHTML = `
        ${message}
        <button class="flash-close">&times;</button>
    `;
    
    flashContainer.appendChild(flashMessage);
    
    // Add close functionality
    const closeBtn = flashMessage.querySelector('.flash-close');
    closeBtn.addEventListener('click', () => {
        flashMessage.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (flashMessage.parentNode) {
            flashMessage.remove();
        }
    }, 5000);
}

function createFlashContainer() {
    const container = document.createElement('div');
    container.className = 'flash-messages';
    document.body.appendChild(container);
    return container;
}

// Close existing flash messages
flashCloseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.remove();
    });
});

// Download CV functionality
const downloadCvBtn = document.getElementById('download-cv');
if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Create a sample CV content (in a real app, this would be a real file)
        const cvContent = `
NAMBASA DAPHINE
Professional Human Resource Manager

CONTACT:
Email: nambasa.daphine@example.com
Phone: +256 700 123456
Location: Kampala, Uganda

PROFESSIONAL SUMMARY:
Strategic HR professional with 8+ years of experience in talent acquisition, 
organizational development, and employee relations. Committed to fostering 
workplace excellence and driving business success through effective people management.

EXPERIENCE:
Senior Human Resource Manager | Leading Tech Company Uganda | 2021 - Present
- Led recruitment efforts resulting in 40% reduction in time-to-hire
- Implemented performance management system increasing productivity by 25%
- Developed and executed HR policies aligned with business objectives

Human Resource Officer | Uganda Manufacturing Ltd | 2019 - 2021
- Coordinated recruitment and selection processes
- Managed onboarding and orientation programs
- Administered employee benefits and compensation

EDUCATION:
Bachelor of Human Resource Management | Makerere University Business School | 2014 - 2018

SKILLS:
- Recruitment & Selection (95%)
- Performance Management (90%)
- Employee Relations (88%)
- HR Policy Development (92%)
- Training & Development (85%)
- Strategic Planning (87%)
        `;
        
        // Create blob and download
        const blob = new Blob([cvContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Nambasa_Daphine_CV.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        // Show success message
        showFlashMessage('CV downloaded successfully!', 'success');
    });
}

// Form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Add input event listeners for real-time validation
const formInputs = document.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
});

// Add CSS for form validation errors
const style = document.createElement('style');
style.textContent = `
    input.error, textarea.error {
        border-color: #dc3545 !important;
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1) !important;
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Lazy loading for images (if any are added later)
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
    
    // Arrow keys for testimonial navigation
    if (e.key === 'ArrowLeft' && prevBtn) {
        prevTestimonial();
    }
    if (e.key === 'ArrowRight' && nextBtn) {
        nextTestimonial();
    }
});

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handlers
const debouncedScrollHandler = debounce(() => {
    // Add any scroll-based animations here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Service Worker registration for PWA (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

console.log('Portfolio website loaded successfully!');
