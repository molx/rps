const telaInicial = document.getElementById('tela-inicial');
const btnAbrir = document.getElementById('btn-abrir');
const slides = document.querySelectorAll('.slide');

let interacaoIniciada = false;

btnAbrir.addEventListener('click', () => {
    telaInicial.classList.add('escondido');
    interacaoIniciada = true;
    
    const primeiroVideo = slides[0].querySelector('video');
    if (primeiroVideo) {
        primeiroVideo.play();
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target.querySelector('video');
        
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if (video && interacaoIniciada) {
                video.play();
            }
        } else {
            entry.target.classList.remove('active');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        }
    });
}, {
    threshold: 0.5
});

slides.forEach(slide => {
    observer.observe(slide);
});