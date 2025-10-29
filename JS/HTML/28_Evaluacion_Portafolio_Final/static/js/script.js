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


function agrandar(img) {
  img.style.transform = "scale(1.2)";
  img.style.transition = "transform 0.5s";
}

function reducir(img) {
  img.style.transform = "scale(1)";
}



// Función que muestra u oculta la descripción
function mostrarDescripcion(elemento) {
    // Busca el texto oculto dentro de este contenedor
    const texto = elemento.querySelector('.texto-habilidad');
    
    // Alterna la clase 'activa' para mostrar u ocultar
    texto.classList.toggle('activa');
}

