function _Suma(){
    let n = parseInt(prompt("Ingrese la cantidad de números naturales a sumar: "))
    let suma = 0;
    let array = []
    for(let i = 1; i <= n; i++){
        suma += i;
        array.push(i)
    } 
    alert(`Números sumados : ${array.join(" - ")}\nSuma de los números: ` + suma)
}

function _Pares(){
    let array = []
    for(let i = 2; i <= 200; i++){
        if(i % 2 === 0) {
            array.push(i)
        }
    }
    alert(`Los primeros 100 números pares son:  ${array.join(" - ")}`)
}

function _Impares(){
    let numero = 1;
    let suma = 2;
    let array = []
    while(numero <= 199){
        numero += suma;
        array.push(numero)
    }
    alert(`Los 100 primeros números impares son: ${array.join(" - ")}`)
}

function _SumaNumeros(){
let array = []
let suma = 0;
    for(let i = 1; i <= 5; i++){
        let n = parseInt(prompt(`Ingresa el ${i} número`))
        suma += n; 
        array.push(i)
    }
    alert(`La suma de los 5 números:\n(${array.join(" + ")})\nEs: ${suma}` )
}

function _SumaN(){
    let numero = parseInt(prompt("Ingrese cuantos numeros desea sumar: "))
    let suma = 0;
    let array = []
        for(let i = 1; i <= numero; i++){
            n = parseInt(prompt(`Ingresa el número ${i} de ${n} `))
            array.push(n);
            suma += n; 
        }
        alert(`La suma de los ${n} numeros:\n(${array.join(" + ")})\nEs: ${suma}`)
    }

function _Suma2N(){
    let num1 = parseInt(prompt("Ingrese primer numero: "))
    let num2 = parseInt(prompt("Ingrese segundo numero: "))
    let pregunta = prompt("¿Desea sumar, restar, multiplicar y dividir? presione los simbolos de cada ejercicio: + , - , * , /")
    let resultado = 0;
    if (pregunta === "+"){
        resultado = num1 + num2;
    } else if (pregunta === "-"){
        resultado = num1 - num2; 
    } else if (pregunta === "*"){
        resultado = num1 * num2;
    } else if (pregunta === "/"){
        resultado = num1 / num2;
    } alert ("Resultado: " + resultado)
}

function _SumaPares(){
    let suma = 0;
    let count = parseInt(prompt("Cuantos números pares quieres sumar: "))
    for(let i = 1; i <= count ; i++){
        let n = parseInt(prompt(`Ingrese el número par numero ${i}`))
        if (n % 2 !== 0) {
            alert("Ese no es un numero par");
            i--;
        } else {   
            suma += i;
        }
    } 
    alert("La suma de los numeros pares es: " + suma)
}

function _PrimerosPares(){
    let suma = 0;
    let condicion = parseInt(prompt("Ingrese cuantos numeros pares desea sumar: "))
    for(let i = 2; i <= condicion; i++){
        (i % 2 === 0); 
            array.push(i)
    }suma += i;
    alert("La suma de los numeros pares son: " + suma)
} 