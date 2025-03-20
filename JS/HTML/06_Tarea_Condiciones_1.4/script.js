function _Temperatura(){
    let temperatura = prompt("Ingrese la temperatura: ")
    if (temperatura <= 0) {
        alert("Hace frío.")
    } else if (temperatura >= 0 && temperatura <= 25){
        alert("La temperatura es agradable.")
    } else  {
    alert("Hace calor.")
}
}

function _Usuario(){
    let nombreUsuario = prompt("Ingrese el usuario: ");
    let contraseña = prompt("Ingrese la contraseña: ");
    if (nombreUsuario === "usuario123" && contraseña === "secreto"){
        alert("Acceso concedido")
    } else {
        alert("Acceso denegado")
    }
}

function _Numero(){
    let numero = parseInt(prompt("Ingrese un número: "))
    if (numero <= -1){
        alert("El número es negativo")
    } else if (numero >= 1) {
        alert("El número es positivo")
    } else {
        alert("El número es cero")
    }
}

function _Puntuacion(){
    let puntuacion = parseInt(prompt("Ingrese puntuación: "))
    if (puntuacion >= 90){
        alert("Excelente")
    } else if (puntuacion >= 70){
        alert("Buen trabajo")
    } else {
        alert("Necesitas mejorar")
    }
}