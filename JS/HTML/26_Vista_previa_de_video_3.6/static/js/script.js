document.addEventListener("DOMContentLoaded", () => {
    const mainVideo = document.querySelector(".placeholder video");
    const mainTitle = document.querySelector(".start h2"); // 🔹 Era h1, pero en HTML es h2
    const videoItems = document.querySelectorAll(".video-small");

    // Función para cambiar el video principal
    function changeMainVideo(videoElement) {
        // Quitar selección previa
        document.querySelectorAll(".video-small").forEach(v => v.classList.remove("selected"));
        videoElement.parentElement.classList.add("selected");

        // Cambiar el src del video principal
        const newSrc = videoElement.getAttribute("src"); // 🔹 Simplificado
        mainVideo.setAttribute("src", newSrc);
        mainVideo.load();
        mainVideo.play();

        // Cambiar el título principal
        const newTitle = videoElement.nextElementSibling.textContent;
        mainTitle.textContent = newTitle;
    }

    // Asignar eventos a cada miniatura y su título
    videoItems.forEach(item => {
        const video = item.querySelector("video");
        const title = item.querySelector(".video-title");

        // Click en el video pequeño
        video.addEventListener("click", () => changeMainVideo(video));

        // Click en el título del video pequeño
        title.addEventListener("click", () => changeMainVideo(video));
    });
});
