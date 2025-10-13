// Cambia el video principal al hacer clic en uno de la lista
function changeVideo(videoId, title) {
    const mainVideo = document.getElementById('main-video');
    const videoTitle = document.getElementById('video-title');
    mainVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    videoTitle.textContent = title;
}

function cambioVideo(elemento){
    const mainVideo = document.getElementById("main-video");
    let rutMainVideo = mainVideo.src;
    let videoPequeno = elemento.src;
    elemento.src = rutMainVideo;
    mainVideo.src = videoPequeno;


    const textoMain = document.getElementById("textoMain");
    let contentTextoMain = textoMain.textContent;
    const textoPequeno = elemento.nextElementSibling;
    let contentTextoPequeno = textoPequeno.textContent;


    textoMain.textContent = contentTextoPequeno;
    textoPequeno.textContent = contentTextoMain;

}
