function _participantes(){
    let nombres = "";
    let array = []
    let contador = 0;
    while(nombres !== "salir") {
        nombres = prompt("ingrese los Nombres (escriba 'salir' para terminar): ")
        if (nombres !== "salir" && nombres !== null) {
            array.push(nombres);
            contador++;
        }
    }
    alert(`Los participantes son: ${array.join (' - ')}`);
    if (contador > 5) { 
        alert("Usted supero los 5 integrantes felicidades")
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



