function LogIn_Out(element){
    if (element.innerText == "Login"){
        element.innerText = "Log out";
    }else{
        element.innerText = "Login"
    }
}

function cambioVideo(element){
    let videoMain = document.getElementById("Main_video");
    let sourceMain = videoMain.src;
    videoMain.src = element.src;
    element.src = sourceMain;
    let cambioTitulo = document.getElementById("titulo")
    let titulopequeno = element.nextElementSibling;
    cambioTitulo.textContent = titulopequeno.textContent; 
}
