// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add loading class to body to hide content
    document.body.classList.add('loading');
    
    // Show page loader initially
    initPageLoader();
    
    // Initialize all functionality after a short delay for smooth transition
    setTimeout(() => {
        initNavigation();
        initScrollAnimations();
        initContactForm();
        initResumeDownload();
        initTypingAnimation();
        initSmoothScroll();
        initMobileMenu();
        initActiveNavigation();
        initParallaxEffects();
        initProjectCardTilt();
        initSectionReveal();
        initRippleEffects();
        
        // Hide loader and show content after everything is initialized
        setTimeout(() => {
            hidePageLoader();
            document.body.classList.remove('loading');
        }, 500);
    }, 300);
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add/remove scrolled class for enhanced styling
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide navbar on scroll down, show on scroll up
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            
            // Handle modal links
            const href = this.getAttribute('href');
            if (href === '#' && this.onclick) {
                // Let the onclick handler handle modal opening
                return;
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Smooth scroll functionality
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    const heroButtons = document.querySelectorAll('.hero-buttons a[href^="#"]');

    [...navLinks, ...heroButtons].forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
            const navbarHeight = 80; // Fixed navbar height instead of calculating
            const targetPosition = targetSection.offsetTop - navbarHeight - 20; // Added extra offset

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll indicator click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function () {
            const aboutSection = document.querySelector('#about');
            const navbarHeight = 80;
            const targetPosition = aboutSection.offsetTop - navbarHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    }
}

// Active navigation highlighting
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
        const scrollPos = window.scrollY + 100; // Adjusted offset to match navbar (80px) + padding

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            // Check if we're in this section (with proper offset)
            if (scrollPos >= sectionTop - 100 && scrollPos < sectionTop + sectionHeight - 100) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Enhanced Scroll animations with multiple animation types
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class for CSS animations
                entry.target.classList.add('visible');
                
                // Add staggered animation for grid items
                if (entry.target.classList.contains('skill-category') ||
                    entry.target.classList.contains('project-card') ||
                    entry.target.classList.contains('stat-item') ||
                    entry.target.classList.contains('contact-item')) {

                    const siblings = Array.from(entry.target.parentElement.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with different animation types
    const fadeInElements = document.querySelectorAll(`
        .about-content,
        .stat-item,
        .experience-card,
        .contact-item
    `);
    
    fadeInElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });

    // Left fade for about text
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        aboutText.classList.add('fade-in-left');
        observer.observe(aboutText);
    }

    // Right fade for about image
    const aboutImage = document.querySelector('.about-image');
    if (aboutImage) {
        aboutImage.classList.add('fade-in-right');
        observer.observe(aboutImage);
    }

    // Scale fade for cards
    const scaleElements = document.querySelectorAll(`
        .skill-category,
        .project-card,
        .hobby-card,
        .leetcode-card
    `);
    
    scaleElements.forEach(element => {
        element.classList.add('fade-in-scale');
        observer.observe(element);
    });

    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
}

// Counter animation
function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    const suffix = element.textContent.replace(/\d/g, '');
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, stepTime);
}

// Typing animation
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const originalText = 'Hi, I\'m Praveen Yadav';
    let currentText = '';
    let isDeleting = false;
    let charIndex = 0;
    let typeSpeed = 100;

    function typeWriter() {
        if (!isDeleting && charIndex < originalText.length) {
            currentText += originalText.charAt(charIndex);
            charIndex++;
            typeSpeed = 100;
        } else if (isDeleting && charIndex > 0) {
            currentText = originalText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else if (!isDeleting && charIndex === originalText.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            typeSpeed = 500; // Pause at beginning
        }

        typingElement.textContent = currentText;

        // Only run the animation once, then keep the full text
        if (!isDeleting && charIndex === originalText.length) {
            return; // Stop the animation
        }

        setTimeout(typeWriter, typeSpeed);
    }

    // Start typing animation after a short delay
    setTimeout(typeWriter, 1000);
}

// Contact form handling
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Update button state with PY loader
        submitButton.innerHTML = '<span class="py-loader">PY</span> Sending...';
        submitButton.disabled = true;

        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Create mailto link
            const mailtoLink = `mailto:praveen098.py@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            )}`;

            // Open email client
            window.location.href = mailtoLink;

            // Reset form
            form.reset();
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;

            showNotification('Thank you! Your message has been prepared. Please send it through your email client.', 'success');
        }, 1500);
    });

    // Enhanced input animations with floating labels
    const formInputs = form.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        // Create floating label if placeholder exists
        if (input.placeholder) {
            const label = document.createElement('label');
            label.textContent = input.placeholder;
            label.setAttribute('for', input.id || input.name);
            input.parentElement.insertBefore(label, input);
            input.placeholder = '';
        }
        
        // Enhanced focus/blur effects
        input.addEventListener('focus', function () {
            this.parentElement.style.transform = 'scale(1.01)';
            this.parentElement.style.transition = 'transform 0.3s ease';
        });

        input.addEventListener('blur', function () {
            this.parentElement.style.transform = 'scale(1)';
        });
        
        // Add input validation visual feedback
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        color: white;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease-out;
        max-width: 400px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        ${type === 'success' ? 'background: linear-gradient(135deg, #34d399, #10b981);' : ''}
        ${type === 'error' ? 'background: linear-gradient(135deg, #ef4444, #dc2626);' : ''}
        ${type === 'info' ? 'background: linear-gradient(135deg, #10b981, #059669);' : ''}
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.parentElement.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Resume download functionality
function initResumeDownload() {
    const downloadButton = document.getElementById('downloadResume');

    downloadButton.addEventListener('click', function (e) {
        e.preventDefault();

        // Show PY loader
        const originalContent = downloadButton.innerHTML;
        downloadButton.innerHTML = '<span class="py-loader">PY</span> Preparing...';
        downloadButton.disabled = true;

        // First, try to download the actual PDF file
        fetch('public/documents/resume.pdf')
            .then(response => {
                if (response.ok) {
                    // PDF exists, create download link
                    const link = document.createElement('a');
                    link.href = 'public/documents/resume.pdf';
                    link.download = 'Praveen_Yadav_Resume.pdf';
                    link.style.display = 'none';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                    downloadButton.innerHTML = originalContent;
                    downloadButton.disabled = false;
                    showNotification('Resume downloaded successfully!', 'success');
                } else {
                    throw new Error('PDF not found');
                }
            })
            .catch(() => {
                // PDF not found, generate HTML version
                const resumeContent = generateResumeContent();

                const printWindow = window.open('', '_blank');
                printWindow.document.write(resumeContent);
                printWindow.document.close();

                setTimeout(() => {
                    printWindow.print();
                    downloadButton.innerHTML = originalContent;
                    downloadButton.disabled = false;
                }, 500);

                showNotification('Resume is being prepared for download. Please use "Save as PDF" in the print dialog.', 'info');
            });
    });
}

// Generate resume content for PDF
function generateResumeContent() {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Praveen Yadav - Resume</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 20px;
                background: white;
                color: #333;
            }
            .header {
                text-align: center;
                border-bottom: 2px solid #10b981;
                padding-bottom: 20px;
                margin-bottom: 30px;
            }
            .name {
                font-size: 28px;
                font-weight: bold;
                color: #333;
                margin-bottom: 5px;
            }
            .title {
                font-size: 18px;
                color: #10b981;
                margin-bottom: 15px;
            }
            .contact {
                font-size: 14px;
                color: #666;
            }
            .section {
                margin-bottom: 25px;
            }
            .section-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
                border-bottom: 1px solid #ddd;
                padding-bottom: 5px;
                margin-bottom: 15px;
            }
            .job {
                margin-bottom: 20px;
            }
            .job-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 8px;
            }
            .job-title {
                font-weight: bold;
                font-size: 16px;
            }
            .job-period {
                font-size: 14px;
                color: #666;
            }
            .job-description {
                margin-left: 0;
            }
            .job-description li {
                margin-bottom: 5px;
            }
            .skills-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 15px;
            }
            .skill-category h4 {
                font-weight: bold;
                margin-bottom: 5px;
                color: #333;
            }
            .skill-list {
                font-size: 14px;
                color: #666;
            }
            .education {
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <div class="name">PRAVEEN YADAV</div>
            <div class="title">Senior NodeJS Backend Developer</div>
            <div class="contact">
                📞 +91-7888859348 | ✉️ praveen098.py@gmail.com | 💼 linkedin.com/in/praveen-yadav
            </div>
        </div>

        <div class="section">
            <div class="section-title">PROFESSIONAL SUMMARY</div>
            <p>Senior Backend Developer with 4+ years of experience in Node.js, TypeScript, microservices, and AWS. Expert in building scalable APIs, cloud-native applications, and backend architecture. Strong background in data structures, testing, and DevOps practices.</p>
        </div>

        <div class="section">
            <div class="section-title">TECHNICAL SKILLS</div>
            <div class="skills-grid">
                <div class="skill-category">
                    <h4>Backend Technologies</h4>
                    <div class="skill-list">Node.js, TypeScript, Express.js, NestJS</div>
                </div>
                <div class="skill-category">
                    <h4>Frontend Technologies</h4>
                    <div class="skill-list">React.js, SvelteKit</div>
                </div>
                <div class="skill-category">
                    <h4>Databases</h4>
                    <div class="skill-list">PostgreSQL, MySQL, Redis, NoSQL</div>
                </div>
                <div class="skill-category">
                    <h4>Cloud & DevOps</h4>
                    <div class="skill-list">AWS (Lambda, S3, RDS, DynamoDB, API Gateway, Cognito), Docker</div>
                </div>
                <div class="skill-category">
                    <h4>Testing</h4>
                    <div class="skill-list">Jest, Vitest, Unit/Integration Testing</div>
                </div>
                <div class="skill-category">
                    <h4>Architecture & Tools</h4>
                    <div class="skill-list">Microservices, Event-Driven Systems, Serverless, Kafka, RabbitMQ, Git, CI/CD</div>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">PROFESSIONAL EXPERIENCE</div>
            <div class="job">
                <div class="job-header">
                    <div class="job-title">Senior NodeJS Backend Developer</div>
                    <div class="job-period">February 2021 - Present</div>
                </div>
                <ul class="job-description">
                    <li>Designed and implemented scalable APIs using Node.js, Express, and NestJS</li>
                    <li>Built serverless applications using AWS Lambda and cloud services</li>
                    <li>Integrated PostgreSQL, Redis, and Kafka for high-performance systems</li>
                    <li>Mentored junior developers and led architectural decisions</li>
                    <li>Optimized system performance achieving sub-200ms response times</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <div class="section-title">KEY PROJECTS</div>
            <div class="job">
                <div class="job-header">
                    <div class="job-title">GfK Consumer Portals</div>
                    <div class="job-period">November 2024 – Present</div>
                </div>
                <p>RESTful APIs with Node.js, TypeScript, and AWS Lambda. Built modular, maintainable services with comprehensive Vitest testing coverage.</p>
            </div>
            <div class="job">
                <div class="job-header">
                    <div class="job-title">Hydro</div>
                    <div class="job-period">December 2023 – November 2024</div>
                </div>
                <p>Developed a comprehensive platform for publishers to register and receive Hydro rewards based on website visits. This innovative solution reduces dependency on traditional advertisements by enabling publishers to monetize "time spent" by visitors.</p>
            </div>
            <div class="job">
                <div class="job-header">
                    <div class="job-title">EQ8 - Blockchain Survey Platform</div>
                    <div class="job-period">2022 – 2023</div>
                </div>
                <p>Built a cutting-edge mobile survey platform where users earn rewards in tokens, USDT, or EXP. Every question, survey, and contest is created as a unique NFT stored on the blockchain.</p>
            </div>
        </div>

        <div class="section">
            <div class="section-title">EDUCATION</div>
            <div class="education">
                <strong>Bachelor of Engineering - Electronics & Communication</strong><br>
                R.I.E.I.T, Punjab | 2012 – 2016
            </div>
        </div>
    </body>
    </html>
    `;
}

// Enhanced skill tag interactions (moved to initRippleEffects)
// Keeping for backward compatibility but enhanced interactions are in initRippleEffects

// Add particle effect to hero section
function createParticleEffect() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(16, 185, 129, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 4}s;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        hero.appendChild(particle);
    }
}

// Initialize particle effect
setTimeout(createParticleEffect, 1000);

// Add scroll progress indicator - FIXED to only show after hero section
function addScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0px;
        left: 0;
        width: 0%;
        height: 3px;
        background: #ffffff;
        z-index: 1001;
        transition: width 0.1s ease-out;
        opacity: 0;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function () {
        const heroSection = document.querySelector('#home');
        const heroHeight = heroSection.offsetHeight;
        const scrollTop = document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        // Only show progress bar after hero section
        if (scrollTop > heroHeight) {
            progressBar.style.opacity = '1';

            // Calculate progress from after hero section to end of document
            const scrollableHeight = documentHeight - windowHeight;
            const scrolledFromHero = scrollTop - heroHeight;
            const maxScrollFromHero = scrollableHeight - heroHeight;

            // Ensure we don't divide by zero and clamp between 0 and 100
            let progress = 0;
            if (maxScrollFromHero > 0) {
                progress = (scrolledFromHero / maxScrollFromHero) * 100;
                progress = Math.max(0, Math.min(100, progress));
            }

            progressBar.style.width = progress + '%';
        } else {
            progressBar.style.opacity = '0';
            progressBar.style.width = '0%';
        }
    });
}

// Initialize scroll progress
addScrollProgress();

// Lazy loading for images (if any are added later)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Performance optimization: Throttle scroll events
function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;

    return function (...args) {
        const currentTime = Date.now();

        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function () {
    // Any additional scroll handling can go here
}, 16)); // ~60fps

// Page Loader Functions
function initPageLoader() {
    // Remove existing loader if any
    const existingLoader = document.querySelector('.page-loader');
    if (existingLoader) {
        existingLoader.remove();
    }
    
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <div class="loader-text">LOADING</div>
        </div>
    `;
    document.body.appendChild(loader);
}

function hidePageLoader() {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.classList.add('hidden');
        setTimeout(() => {
            if (loader.parentElement) {
                loader.remove();
            }
        }, 500);
    }
}

// Parallax Effects
function initParallaxEffects() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const floatingIcons = document.querySelectorAll('.icon-item');
    
    if (!hero) return;

    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (scrolled < window.innerHeight) {
            if (heroContent) {
                heroContent.style.transform = `translateY(${rate * 0.3}px)`;
            }
            
            floatingIcons.forEach((icon, index) => {
                const speed = (index + 1) * 0.1;
                icon.style.transform = `translateY(${rate * speed}px)`;
            });
        }
    }, 16));
}

// 3D Tilt Effect for Project Cards
function initProjectCardTilt() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });
}

// Section Reveal Animation
function initSectionReveal() {
    const sections = document.querySelectorAll('section[id]');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Ripple Effect for Buttons
function initRippleEffects() {
    const buttons = document.querySelectorAll('.btn, .btn-demo, .skill-tag');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.transform = 'translate(-50%, -50%)';
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Open Modal Functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    // Show the modal with animation
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close Modal Functionality
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }, 300);
}

// Demo Modal Functionality
function showDemo(projectType) {
    const modal = document.getElementById('demoModal');
    const icoDemo = document.getElementById('icoDemo');

    // Hide all demo content first
    icoDemo.style.display = 'none';

    // Show the requested demo content
    if (projectType === 'ico') {
        icoDemo.style.display = 'block';
    }

    // Show the modal with animation
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Copy Code Functionality
function copyCode(button) {
    const codeBlock = button.closest('.code-snippet').querySelector('code');
    const text = codeBlock.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const icon = button.querySelector('i');
        const originalClass = icon.className;
        
        button.classList.add('copied');
        icon.className = 'fas fa-check';
        
        setTimeout(() => {
            button.classList.remove('copied');
            icon.className = originalClass;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Close modal functionality
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('demoModal');
    const closeBtn = document.querySelector('.close');

    // Close modal function with animation
    function closeDemoModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }, 300);
    }

    // Close modal when clicking the X button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeDemoModal);
    }

    // Close modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeDemoModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            const openModals = document.querySelectorAll('.section-modal.show, .modal.show');
            openModals.forEach(openModal => {
                if (openModal.id === 'hobbiesModal' || openModal.id === 'leetcodeModal') {
                    closeModal(openModal.id);
                } else if (openModal.id === 'demoModal') {
                    closeDemoModal();
                }
            });
        }
    });

    // Close section modals when clicking outside
    document.addEventListener('click', function (event) {
        const hobbiesModal = document.getElementById('hobbiesModal');
        const leetcodeModal = document.getElementById('leetcodeModal');
        
        if (hobbiesModal && event.target === hobbiesModal) {
            closeModal('hobbiesModal');
        }
        if (leetcodeModal && event.target === leetcodeModal) {
            closeModal('leetcodeModal');
        }
    });
}); 