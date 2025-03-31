function _multiplicar(){
    let n = parseInt(prompt("Ingresar un numero para  multiplicar: ")) 
    let array = []
    for (let i = 1; i<= 10; i++){
        array.push(`${n} * ${i} = ${n * i}`);
    }alert(`Resultados de multiplicación:\n` + array.join("    "))
}

function _suma(){
    let n = parseInt(prompt("Cuantos numeros desea sumar: ")) 
    let suma = 0; 
    let numero = parseInt(prompt("Ingresa el numero: "))
    for (let i = 1; i <= n; i++){
        suma += numero;
    }alert(`La suma es: ${suma} `)
}

function _pares(){
    let n = parseInt(prompt("Ingrese un numero inicial: "))
    let n_final = parseInt(prompt("Ingrese un numero final: "))
    let array = [];
    let inicio; 
    if (n % 2 === 0){
        inicio = n;
    } else {
        inicio = n + 1; 
    }
    for (let i = inicio; i <= n_final; i += 2){
        array.push(i)
    }
    alert(`Los multiplos son: ${array.join(" - ")}`)
}