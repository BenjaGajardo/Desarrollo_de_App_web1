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
const resultado = documento.getElementById("resultado");


function agregarElementosCompra(){
    //valor input
    let elemento = document.getElementById("lista").value;      
    //Crear elemento HTML --> CreateElement
    let item = document.createElement("li");
    item.innerText = elemento; //<li>--InnerText--</li>
    //appendChild inserta valor hijo en Padre
    //resultado(<ul>(item(<li></li>))</ul>)
    resultado.appendChild(item);
}

let carrito = [];
function mostrarListaCompras(){
    const lista = document.getElementById("resultado2");
    lista.innerHTML = ""; //Limpiar antes de mostrar

    for (let i = 0; i < carrito.length; i++) { 
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2"
        li.textContent = `- ${carrito[i]}`;
        lista.appendChild(li); //Agrega el elemento a la lista
    }
}


function agregarElemento2(){
    const input = document.getElementById("lista2");
    const valor = input.value.trim(); //Guarda valor sin espacios extra}

    if (valor === " ") return; 
    carrito.push(valor); //Agrega el valor al final


    input.value = ""; //Limpia el input
    input.focus(); //Agrega foco hacia el input

    mostrarListaCompras()
}

function eliminarUltimoElemento(){
    if (carrito.lenght > 0) {
        carrito.pop(); 
    }
    mostrarListaCompras()
}





