// PRELOADER
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');

    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';

        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500); 
    }, 1000);
});

// Alert on Order Now
document.querySelector('.button').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Thank you for choosing us! Your order will be processed soon.');
});

// Form validation on submission
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('input[name="Backend-name"]');
    const email = document.querySelector('input[name="Backend-email"]');
    const phone = document.querySelector('input[name="Backend-number"]');
    const message = document.querySelector('textarea[name="Backend-message"]');

    if (!name.value || !email.value || !phone.value || !message.value) {
        e.preventDefault();
        alert('Please fill out all fields before submitting.');
    }
});

// Scroll to top button
const scrollBtn = document.querySelector('.scrollbtn');
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});
scrollBtn.style.display = 'none';

// DARK MODE TOGGLE
const toggleBtn = document.getElementById('modeToggle');

// Load mode from localStorage
const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️ Light Mode';
} else {
    toggleBtn.textContent = '🌙 Dark Mode';
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    toggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('mode', isDark ? 'dark' : 'light');
});
