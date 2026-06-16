const slides = document.querySelectorAll('.slide');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.5
});

slides.forEach(slide => {
    observer.observe(slide);
});