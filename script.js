// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initContactForm();
    initResumeDownload();
    initTypingAnimation();
    initSmoothScroll();
    initMobileMenu();
    initActiveNavigation();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add/remove background on scroll
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = 'none';
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
                const navbarHeight = 70; // Fixed navbar height instead of calculating
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
            const navbarHeight = 70;
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
        const scrollPos = window.scrollY + 90; // Adjusted offset to match navbar + padding

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

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // Add staggered animation for grid items
                if (entry.target.classList.contains('skill-category') ||
                    entry.target.classList.contains('project-card') ||
                    entry.target.classList.contains('stat-item')) {

                    const siblings = entry.target.parentElement.children;
                    const index = Array.from(siblings).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll(`
        .about-content,
        .skill-category,
        .timeline-item,
        .project-card,
        .contact-item,
        .stat-item,
        .experience-card
    `);

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease-out';
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

    // Add input animations
    const formInputs = form.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.style.transform = 'scale(1.02)';
        });

        input.addEventListener('blur', function () {
            this.parentElement.style.transform = 'scale(1)';
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

// Skill tag interactions
document.addEventListener('DOMContentLoaded', function () {
    const skillTags = document.querySelectorAll('.skill-tag, .tech-tag');

    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });

        tag.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });
});

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
        background: linear-gradient(135deg, #10b981, #34d399);
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