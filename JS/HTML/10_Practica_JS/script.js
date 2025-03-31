function _multiplicar(){
    let n = parseInt(prompt("Ingresar un numero para  multiplicar: ")) 
    let array = []
    for (let i = 1; i<= 10; i++){
        array.push(`${n} * ${i} = ${n * i}`);
    }alert(`Resultados de multiplicación:\n` + array.join("\n"))
}

function _suma(){
    let n = parseInt(prompt("Cuantos numeros desea sumar: ")) 
    let suma = 0; 
    let numero = parseInt(prompt("Ingresa el numero: "))
    for (let i = 1; i <= n; i++){
        suma += numero;
    }alert(`La suma es: ${suma} `)
}