function _Suma(){
    let n = parseInt(prompt("Ingrese la cantidad de numeros naturales a sumar: "))
    let suma = 0;
    let array = []
    for(let i = 1; i <= n; i++){
        suma += i;
        array.push(i)
    } 
    alert(`Numeros sumados : ${array.join(" - ")}\nSuma de los numeros: ` + suma)
}

function _Pares(){
    let array = []
    for(let i = 2; i <= 200; i++){
        if(i % 2 === 0) {
            array.push(i)
        }
    }
    alert(`Los primeros 100 numeros pares son:  ${array.join(" - ")}`)
}

function _Impares(){
    let numero = 1;
    let suma = 2;
    let array = []
    while(numero <= 199){
        numero += suma;
        array.push(numero)
    }
    alert(`Los 100 primeros numeros impares son: ${array.join(" - ")}`)
}

function _SumaNumeros(){
let suma = 0;
    for(let i = 1; i <= 5; i++){
        let n = parseInt(prompt(`Ingresa el ${i} numero`))
        suma += n; 
    }
    alert("la suma de los 5 numeros son: "+ suma)
}

function _SumaN(){
    let numero = parseInt(prompt("Ingrese cuantos numeros desea sumar: "))
    let suma = 0;
        for(let i = 1; i <= numero; i++){
            let n = parseInt(prompt(`Ingresa el ${i} numero`))
            suma += n; 
        }
        alert("la suma de los 5 numeros son: "+ suma)
    }

function _Suma2N(){
    let num1 = parseInt(prompt("Ingrese primer numero: "))
    let num2 = parseInt(prompt("Ingrese segundo numero: "))
    
}
