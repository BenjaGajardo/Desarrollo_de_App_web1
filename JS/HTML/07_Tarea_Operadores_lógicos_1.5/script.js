function _Edad(){
    let edad = prompt("Ingrese su edad: ")
    let aceptaTerminos = prompt("¿Acepta los terminos? escriba si o no: ")
    if (edad >= 18 && aceptaTerminos === "si") {
        alert("Acceso permitido")
    } else {
        alert("Acceso denegado")
    }
}

function _Descuento(){
    let edad = prompt("Ingrese edad: ")
    let esEstudiante = prompt("¿Es estudiante? escriba si o no: ")
    if (edad >= 60 || esEstudiante === "si") {
        alert("Descuento aplicado")
    } else {
        alert("No tienes descuento")
    }
}

function _Usuario(){
    let usuario = prompt("Ingrese usuario: ")
    let contraseña = prompt("Ingrese contraseña: ")
    if (!usuario || !contraseña){
        alert("Error: Debes ingresar usuario y contraseña")
    } else {
        alert("Inicio de sesion exitoso")
    }
}

function _Energia(){
    let energiaSuficiente = prompt("¿La energia es suficiente? si o no: ")
    let interruptorEncendido = prompt("¿El interruptor esta encendido? si o no: ")
    if (energiaSuficiente === "si" && interruptorEncendido === "si"){
        alert("Maquina encendida")
    } else {
        alert("No se puede encender la maquina")
    }
}

function _Acceso(){
    let bloqueado = prompt("¿El usuario esta bloqueado? si o no: ")
    let tieneCredenciales = prompt("¿Tiene credenciales? si o no: ")
    if (bloqueado === "si" || tieneCredenciales !== "si"){
        alert("Acceso denegado")
    } else {
        alert("Acceso permitido")
    }
}