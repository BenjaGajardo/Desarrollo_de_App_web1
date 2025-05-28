function _participantes() {
    let nombres = "";
    let lista = [];
    while (nombres !== "salir") {
        nombres = prompt("Ingrese los nombres (escriba 'salir' para terminar): ");
        if (nombres !== "salir" && nombres !== null) {
            lista.push(nombres);
        }
    }
    alert(`Los participantes son: ${lista.join(' - ')}`);
    if (lista.length > 5) {
        alert("¡Usted superó los 5 integrantes, felicidades!");
    }
}

function _CajaRegistradora(){
    let productos = ['manzana', 'pan', 'leche']
    for (let contador = 1; contador <= 5; contador++){
        let vender = productos.pop()
        if (vender !== undefined) {
            alert(`Producto vendido: ${vender}`)
        }else {
            alert("No hay mas productos para vender")
        }
    }
}

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
