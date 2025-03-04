// DOM Ready
document.addEventListener('DOMContentLoaded', function () {
    // AOS Animation Initialization
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scroll for Navigation Links
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const href = this.getAttribute('href');

            // Verifique se o href é apenas "#" (link genérico)
            if (href === "#") {
                // Não faça nada ou role para o topo, se preferir
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            // Caso contrário, role até o elemento alvo
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Portfolio Filter
    const filterBtns = document.querySelectorAll('#portfolio-filter .nav-link');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filter === '*' || item.classList.contains(filter.substring(1))) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 500);
                }
            });
        });
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Basic validation
            let valid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Simple validation - can be expanded
            if (!name.value.trim()) {
                markInvalid(name);
                valid = false;
            } else {
                markValid(name);
            }

            if (!email.value.trim() || !isValidEmail(email.value)) {
                markInvalid(email);
                valid = false;
            } else {
                markValid(email);
            }

            if (!message.value.trim()) {
                markInvalid(message);
                valid = false;
            } else {
                markValid(message);
            }

            // If form is valid, you would typically submit to server
            if (valid) {
                // Form submission logic would go here
                // For now, just show a success message
                const formElements = contactForm.elements;
                for (let i = 0; i < formElements.length; i++) {
                    formElements[i].disabled = true;
                }

                // Create success message
                const successMsg = document.createElement('div');
                successMsg.className = 'alert alert-success mt-3';
                successMsg.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
                contactForm.appendChild(successMsg);

                // Reset the form after 3 seconds
                setTimeout(() => {
                    contactForm.reset();
                    successMsg.remove();
                    for (let i = 0; i < formElements.length; i++) {
                        formElements[i].disabled = false;
                    }
                }, 3000);
            }
        });
    }

    // Helper functions for form validation
    function markInvalid(field) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
    }

    function markValid(field) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Animated Progress Bars on Scroll
    const progressBars = document.querySelectorAll('.progress-bar');
    const skillsSection = document.getElementById('skills');

    if (skillsSection && progressBars.length) {
        const animateProgressBars = () => {
            const sectionPosition = skillsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (sectionPosition < screenPosition) {
                progressBars.forEach(bar => {
                    const value = bar.getAttribute('aria-valuenow');
                    bar.style.width = value + '%';
                });
                window.removeEventListener('scroll', animateProgressBars);
            }
        };

        window.addEventListener('scroll', animateProgressBars);
    }

    // Preload animation to ensure smooth AOS effects
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');
    });
});