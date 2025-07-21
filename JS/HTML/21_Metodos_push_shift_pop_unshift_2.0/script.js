function _Compras(){
    let Compras = [];
    Compras.push("Pan", "Leche", "Huevos")
    alert(`Compras: ${Compras.join(" - ")}`)
}


function _Compras2(){
    let Compras = [];
    Compras.push("Pan", "Leche", "Huevos")
    eliminar = Compras.pop();
    alert(`Compras: ${Compras.join(" - ")} \nProducto eliminado: ${eliminar}`)
}


function _Colores(){
    let Colores = ["Rojo", "Azul"];
    alert(`Colores (original): ${Colores.join(" - ")}`)

    Colores.unshift("Amarillo")
    alert(`Colores (unshift): ${Colores.join(" - ")} `)

    ultimo = Colores.shift("Amarillo");
    alert(`Colores (shift): ${Colores.join(" - ")}`)
    alert(`Color eliminado: ${ultimo}`)
}


function _Numeros(){
    let numeros = [10, 20, 30]
    alert(`Numeros (original): ${numeros.join(" - ")}`)

    numeros.push(40)
    alert(`Numeros (Alterado): ${numeros.join(" - ")}`)

    numeros.shift(10)
    alert(`Numeros (shift): ${numeros.join(" - ")}`)

    numeros.unshift(5)
    alert(`Numeros (unshift): ${numeros.join(" - ")}`)

    numeros.pop(40)
    alert(`Numeros (pop): ${numeros.join(" - ")}`)
}


function _Orden(){
    let orden = [];
    orden.unshift(1, 2, 3)
    alert(`Orden (unshift): ${orden.join(" - ")}`)
}


function _Historial(){
    let historial = [];
    historial.push("Google", "Facebook", "Twitter");
    alert(`Historial (push): ${historial.join(" -")}`)

    let eliminar = historial.pop();
    alert(`Historial (pop): ${historial.join(" - ")} \nProducto eliminado: ${eliminar}`)
}

function _Cola(){
    let cola = ["Cliente1", "Cliente2", "Cliente3"];
    alert(`Cola (original): ${cola.join(" - ")}`)

    cola.shift("Cliente01");
    alert(`Cola (shift): ${cola.join(" - ")}`)

    cola.push("Cliente04");
    alert(`Cola (push): ${cola.join(" - ")}`) 
}


function _Nombres(){ 
    let nombres = ["Pedro", "juan", "Luis"];
    alert(`nombres (original): ${nombres.join(" - ")}`)

    nombres.pop("Luis");
    alert(`nombres (pop): ${nombres.join(" - ")}`)

    nombres.unshift("Mateo");
    alert(`nombres (unshift): ${nombres.join(" - ")}`)

    nombres.push("Ana");
    alert(`nombres (push): ${nombres.join(" - ")}`)
}

function _Pilas_Colas(){
    let pila = [];

}


//referencia ul
const resultado = document.getElementById("resultado");
function agregarElementoCompra(){
    //Valor input
    let elemento = document.getElementById("lista").value;
    //Crear elemento HTML --> CreateElement
    let item = document.createElement("li");
    item.innerText = elemento; //<li>--InnerText--</li>
    //appendChild inserta valor hijo en Padre
    // resultado(<ul>(item(<li></li>))</ul>)
    resultado.appendChild(item);
}


let carrito = [];
function mostrarListaCompra() {
    const lista = document.getElementById("resultado2");
    lista.innerHTML = ""; // Limpiar antes de mostrar la lista

    for (let i = 0; i < carrito.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2"
        li.textContent = `${carrito[i]}`;
        lista.appendChild(li) // Agrega elementos a la lista
    }
} 


function agregarElemento2() {
    const input = document.getElementById("lista2");
    const valor = input.value.trim(); // Guarda valor sin espacios extras

    if (valor === "") return;
    carrito.push(valor); // Agrega valor al final
    input.value = "";// Limpia el input
    input.focus(); // Agrega foco hacia el input

    mostrarListaCompra()
}

function eliminarUltimoElemento() {
    if (carrito.length > 0) {
        carrito.pop();
    }

    mostrarListaCompra()
}


//Ejericicio 3
let colores = [];
function agregarElementoColores() {
    const input = document.getElementById("lista3");
    const valor = input.value.trim(); // Guarda valor sin espacios extras

    if (valor === "") return;
    colores.unshift("- " + valor); 
    input.value = "";// Limpia el input
    input.focus(); // Agrega foco hacia el input

    mostrarListaColores()
}

function mostrarListaColores() {
    const lista = document.getElementById("resultado3");
    lista.innerHTML = ""; // Limpiar antes de mostrar la lista

    for (let i = 0; i < colores.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2"
        li.textContent = `${colores[i]}`;
        lista.appendChild(li) // Agrega elementos a la lista
    }
} 



//Ejercicio 4
let colores2 = [];
let eliminados = [];
function mostrarListaColores2() {
    const lista = document.getElementById("resultado4");
    lista.innerHTML = ""; // Limpiar antes de mostrar la lista

    for (let i = 0; i < colores2.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2"
        li.textContent = `${colores2[i]}`;
        lista.appendChild(li) // Agrega elementos a la lista
    }
} 


function agregarElementoColores2() {
    const input = document.getElementById("lista4");
    const valor = input.value.trim(); // Guarda valor sin espacios extras

    if (valor === "") return;
    colores2.push("- " +valor); // Agrega valor al final
    input.value = "";// Limpia el input
    input.focus(); // Agrega foco hacia el input

    mostrarListaColores2()    
}


function eliminarPrimerElemento2() {
    if (colores2.length > 0) {
        const eliminado = colores2.shift(); // Elimina y obtiene el primer elemento
        eliminados.push(eliminado); // Guarda el eliminado
    }

    // Mostrar la lista de eliminados
    const lista = document.getElementById("eliminado");
    lista.innerHTML = ""; // Limpiar antes de mostrar la lista
    for (let i = 0; i < eliminados.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2"
        li.textContent = `${eliminados[i]}`;
        lista.appendChild(li); // Agrega elementos a la lista
    }
    mostrarListaColores2();
}


//Ejercicio 5
let numeros = [];
let eliminados2 = [];

function agregarFinal() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim();
    if (valor === "") return;
    numeros.push("- " + valor);
    input.value = "";
    input.focus();
    mostrarListaNumeros();
}

function agregarInicio3() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim();
    if (valor === "") return;
    numeros.unshift("- " + valor);
    input.value = "";
    input.focus();
    mostrarListaNumeros();
}

function eliminarPrimerElemento2() {
    if (numeros.length > 0) {
        const eliminado = numeros.shift();
        eliminados2.push(eliminado);
    }
    mostrarEliminados2();
    mostrarListaNumeros();
}

function eliminarUltimoElemento2() {
    if (numeros.length > 0) {
        const eliminado = numeros.pop();
        eliminados2.push(eliminado);
    }
    mostrarEliminados2();
    mostrarListaNumeros();
}

function mostrarListaNumeros() {
    const lista = document.getElementById("resultado5");
    lista.innerHTML = "";
    for (let i = 0; i < numeros.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${numeros[i]}`;
        lista.appendChild(li);
    }
}

function mostrarEliminados2() {
    const lista = document.getElementById("eliminado3");
    lista.innerHTML = "";
    for (let i = 0; i < eliminados2.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = eliminados2[i];
        lista.appendChild(li);
    }
}


//Ejercicio 6
let numeros2 = [];
function agregarElementoNumeros2() {
    const input = document.getElementById("lista6");
    const valor = input.value.trim(); // Guarda valor sin espacios extras

    if (valor === "") return;
    numeros2.unshift("- " + valor);
    input.value = "";// Limpia el input
    input.focus(); // Agrega foco hacia el input

    mostrarListaNumeros2()
}

function mostrarListaNumeros2() {
    const lista = document.getElementById("resultado6");
    lista.innerHTML = ""; // Limpiar antes de mostrar la lista

    for (let i = 0; i < numeros2.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2"
        li.textContent = `${numeros2[i]}`;
        lista.appendChild(li) // Agrega elementos a la lista
    }
} 


//Ejercicio 7
let historial = [];
let eliminados3 = [];
function mostrarListaHistorial() {
    const lista = document.getElementById("resultado7");
    lista.innerHTML = ""; // Limpiar antes de mostrar la lista

    for (let i = 0; i < historial.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2"
        li.textContent = `${historial[i]}`;
        lista.appendChild(li) // Agrega elementos a la lista
    }
} 


function agregarElementoHistorial() {
    const input = document.getElementById("lista7");
    const valor = input.value.trim(); // Guarda valor sin espacios extras

    if (valor === "") return;
    historial.push("- " +valor); // Agrega valor al final
    input.value = "";// Limpia el input
    input.focus(); // Agrega foco hacia el input

    mostrarListaHistorial()
}


function eliminarPrimerElemento3() {
    if (historial.length > 0) {
        const eliminado = historial.shift(); // Elimina y obtiene el primer elemento
        eliminados3.push(eliminado); // Guarda el eliminado
    }

    // Mostrar la lista de eliminados
    const lista = document.getElementById("eliminado4");
    lista.innerHTML = ""; // Limpiar antes de mostrar la lista
    for (let i = 0; i < eliminados3.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2"
        li.textContent = `${eliminados3[i]}`;
        lista.appendChild(li); // Agrega elementos a la lista
    }
    mostrarListaHistorial();
}


//Ejercicio 8
let cola = [];
let eliminados4 = [];


function agregarCola() {
    const input = document.getElementById("lista8");
    const valor = input.value.trim();

    if (valor === "") return;
    cola.push("- " + valor);
    input.value = "";
    input.focus();
    mostrarListaCola();
}


function eliminarPrimerElemento4() {
    if (cola.length > 0) {
        const eliminado = cola.shift(); // Elimina y obtiene el primer elemento
        eliminados4.push(eliminado); // Guarda el eliminado
    }

    // Mostrar la lista de eliminados
    const lista = document.getElementById("eliminado5");
    lista.innerHTML = ""; // Limpiar antes de mostrar la lista
    for (let i = 0; i < eliminados4.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2"
        li.textContent = `${eliminados4[i]}`;
        lista.appendChild(li); // Agrega elementos a la lista
    }
    mostrarListaCola();
}


function mostrarListaCola() {
    const lista = document.getElementById("resultado8");
    lista.innerHTML = "";
    for (let i = 0; i < cola.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${cola[i]}`;
        lista.appendChild(li);
    }
}


//Ejercicio 9
let nombres = [];
function agregarInicio4() {
    const input = document.getElementById("lista9");
    const valor = input.value.trim();
    if (valor === "") return;
    nombres.unshift("- " + valor);
    input.value = "";
    input.focus();
    mostrarListaNombres();
}


function agregarFinal2() {
    const input = document.getElementById("lista9");
    const valor = input.value.trim();
    if (valor === "") return;
    nombres.push("- " + valor);
    input.value = "";
    input.focus();
    mostrarListaNombres();
}


function eliminarUltimoElemento3() {
    if (nombres.length > 0) {
        nombres.pop();
    }

    mostrarListaNombres()
}


function mostrarListaNombres() {
    const lista = document.getElementById("resultado9");
    lista.innerHTML = "";
    for (let i = 0; i < nombres.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${nombres[i]}`;
        lista.appendChild(li);
    }
}

//Ejercicio 10
let cargasGastadas = [];
let pila = [];

function agregarElementoPilasYColas() {
    const input = document.getElementById("lista10");
    const valor = input.value.trim(); // Guarda valor sin espacios extras

    if (valor === "") return;
    pila.push("- " + valor); // Agrega valor al final
    input.value = "";// Limpia el input
    input.focus(); // Agrega foco hacia el input

    mostrarListaPila();
}


function eliminarUltimoElemento7() {
    if (pila.length > 0) {
        const eliminado = pila.pop();
        cargasGastadas.push(eliminado);
    }

    mostrarListaPila();
    mostrarEliminados3();
}


function mostrarListaPila() {
    const lista = document.getElementById("resultado10");
    lista.innerHTML = "";
    for (let i = 0; i < pila.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${pila[i]}`;
        lista.appendChild(li);
    }
}


function mostrarEliminados3() {
    const lista = document.getElementById("eliminado6");
    lista.innerHTML = "";
    for (let i = 0; i < cargasGastadas.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = cargasGastadas[i];
        lista.appendChild(li);
    }
}

let colaNueva = [];
let clientesAtendidos = [];

function agregarFinal3() {
    const input = document.getElementById("lista11");
    const valor = input.value.trim();
    if (valor === "") return;
    colaNueva.push("> " + capitalize(valor));
    input.value = "";
    input.focus();
    mostrarClientes();
}

function eliminarPrimerElemento4() {
    if (colaNueva.length > 0) {
        const eliminado = colaNueva.shift();
        clientesAtendidos.push(eliminado);
    }
    mostrarClientes();
    mostrarEliminados4();
}

function mostrarClientes() {
    const lista = document.getElementById("resultado11");
    lista.innerHTML = "";
    for (let i = 0; i < colaNueva.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${colaNueva[i]}`;
        lista.appendChild(li);
    }
}

function mostrarEliminados4() {
    const lista = document.getElementById("eliminado7");
    lista.innerHTML = "";
    for (let i = 0; i < clientesAtendidos.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = clientesAtendidos[i];
        lista.appendChild(li);
    }
}


//Ejercicio 11
let semana = [];
function agregarFinal4() {
    const input = document.getElementById("lista12");
    const valor = input.value.trim();
    if (valor === "") return;
    semana.push("- " + valor);
    input.value = "";
    input.focus();
    mostrarListaSemana();
}


function agregarInicio5() {
    const input = document.getElementById("lista12");
    const valor = input.value.trim();
    if (valor === "") return;
    semana.unshift("- " + valor);
    input.value = "";
    input.focus();
    mostrarListaSemana();
}


function eliminarPrimerElemento5(){
    if (semana.length > 0) {
        semana.shift();
    }
    mostrarListaSemana();
}


function mostrarListaSemana() {
    const lista = document.getElementById("resultado12");
    lista.innerHTML = "";
    for (let i = 0; i < semana.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-item-center-mb-2";
        li.textContent = `${semana[i]}`;
        lista.appendChild(li);
    }
}


window.onload = function() {
    mostrarListaSemana();
};









