window.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.about-transicion .img-sobreMi');
    let current = 0;
    const total = images.length;
    const interval = 8000; // 8 segundos por imagen

    // Inicializa: solo la primera visible
    images.forEach((img, index) => {
        img.style.opacity = index === 0 ? '1' : '0';
        img.style.transform = 'scale(1) translate(0,0)';
        img.style.transition = 'opacity 1s ease, transform 8s ease';
    });

    function showNext() {
        // Oculta la actual
        images[current].style.opacity = '0';
        images[current].style.transform = 'scale(1.1) translate(-5px, -5px)';

        // Incrementa índice
        current = (current + 1) % total;

        // Muestra la siguiente
        images[current].style.opacity = '1';
        images[current].style.transform = 'scale(1.05) translate(5px, 5px)';
    }

    setInterval(showNext, interval);
});

