function _Numero(){
    let numero = prompt("Escribe un numero para saber si es par: ")
    if (numero % 2 == 0){
        alert("El numero es par")
    } else {
        alert("El numero es impar")
    }
}

function _Calculadora(){
    let peso = parseFloat(prompt("Ingrese peso: "))
    let altura = parseFloat(prompt("Ingrese altura: "))
    let ejercicio = peso / (altura * altura)
    if (ejercicio < 18.5){
        alert("Bajo peso")
    } else if (ejercicio >= 18.5 && ejercicio <= 24.9){
        alert("peso normal")
    } else {
        alert ("Sobrepeso")
    }
}

function _Calculadora_notas(){
    let nota1 = parseFloat(prompt("Ingrese su primera nota: "))
    let nota2 = parseFloat(prompt("Ingrese su segunda nota: "))
    let nota3 = parseFloat(prompt("Ingrese su tercera nota: "))
    let promedio = (nota1 + nota2 + nota3)/3
    if (promedio < 4.0){
        alert("Reprobado")
    } else if (promedio > 4.0){
        alert("Aprobado")
    }
}