document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('show');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('show');
        });
    });

    // FAQ Accordion Functionality
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector('i');

            // Toggle current item
            content.classList.toggle('hidden');
            content.classList.toggle('open');
            toggle.classList.toggle('active');

            // Close other items when one is opened (Accordion behavior)
            faqToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    const otherContent = otherToggle.nextElementSibling;
                    otherContent.classList.add('hidden');
                    otherContent.classList.remove('open');
                    otherToggle.classList.remove('active');
                }
            });
        });
    });

    // Consultation Form Submission
    const form = document.getElementById('consultation-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;

        // Simulate loading state
        submitBtn.innerText = 'Submitting...';
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-75');

        // Simulate API call
        setTimeout(() => {
            alert('Thank you! Your request has been received. An attorney will contact you shortly.');
            form.reset();
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-75');
        }, 1500);
    });
});