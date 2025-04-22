// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect with parallax
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in effect
document.querySelectorAll('.service-card, .timeline-item, .about-section img').forEach(element => {
    observer.observe(element);
});

// Background transition effect with gradient animation
const sections = document.querySelectorAll('section[data-background-transition]');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
            const color = section.getAttribute('data-background-transition');
            document.body.style.backgroundColor = color;
        }
    });
});

// Mouse move parallax effect
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.transform = `perspective(1000px) rotateX(${(y - rect.height/2)/20}deg) rotateY(${(x - rect.width/2)/20}deg)`;
    });
});

// Mobile menu toggle with animation
const mobileMenuButton = document.createElement('button');
mobileMenuButton.classList.add('mobile-menu-button');
mobileMenuButton.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
`;

const nav = document.querySelector('.nav-links');
mobileMenuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuButton.classList.toggle('active');
});

// Add mobile menu button for small screens
const headerContainer = document.querySelector('header .container');
if (window.innerWidth <= 768) {
    headerContainer.appendChild(mobileMenuButton);
}

// Add CSS for mobile menu with animations
const style = document.createElement('style');
style.textContent = `
    .mobile-menu-button {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px;
        z-index: 1001;
    }
    
    .mobile-menu-button span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: var(--brand-primary);
        margin: 5px 0;
        transition: 0.3s;
    }
    
    @media (max-width: 768px) {
        .mobile-menu-button {
            display: block;
        }
        
        .nav-links {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 20px;
            display: none;
            flex-direction: column;
            align-items: center;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            transition: transform 0.3s ease;
        }
        
        .nav-links.active {
            display: flex;
            transform: translateY(0);
        }
        
        .nav-links a {
            margin: 10px 0;
            opacity: 0;
            transform: translateX(-20px);
            transition: all 0.3s ease;
        }
        
        .nav-links.active a {
            opacity: 1;
            transform: translateX(0);
        }
        
        .mobile-menu-button.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-button.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-button.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;

document.head.appendChild(style);

// Add hover effect to timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0) scale(1)';
    });
});

// Add typing effect to hero subtitle
const subtitle = document.querySelector('.subtitle');
const text = subtitle.textContent;
subtitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

setTimeout(typeWriter, 1000); 