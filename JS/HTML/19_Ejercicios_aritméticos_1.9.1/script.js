function _notas() {
    let notas = [];
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
        let n = parseFloat(prompt(`Ingrese la nota ${i}: `))
        notas.push(n)
        suma += n;
    }
    let promedio = suma / 5
    if (promedio >= 4.0) {
        alert(`Aprobado, el promedio del estudiante es: ${promedio}` )
    }
    else { 
        alert(`Reprobado, el promedio del estudiante es: ${promedio}`)
    }
}

function _Numeros_ParesImpares() {
    let pares = [];
    let impares = [];
    for (let i = 1; i <= 6; i++) {
        let n = parseFloat(prompt(`Ingrese el ${i} numero: `))
        if (n % 2 == 0) {
            pares.push(n);
        } else {
            impares.push(n)
        }
    }
    alert(`los numeros pares son: ${pares.join(' - ')}\nlos numeros impares son: ${impares.join(' - ')}`)
}
