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


