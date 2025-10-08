// Cambia el video principal al hacer clic en uno de la lista
function changeVideo(videoId, title) {
    const mainVideo = document.getElementById('main-video');
    const videoTitle = document.getElementById('video-title');
    mainVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    videoTitle.textContent = title;
}
