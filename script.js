// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add some interactivity, e.g., alert on contact
document.querySelector('#contact a').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Contact me at your.email@example.com');
});