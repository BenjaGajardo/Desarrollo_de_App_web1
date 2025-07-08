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
    let orden = [4, 5, 6];

    orden.unshift(1, 2, 3)
    alert(`Orden (unshift): ${orden.join(" - ")}`)
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



