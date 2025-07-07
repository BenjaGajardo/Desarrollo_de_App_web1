function _Compras(){
    let Compras = [];
    Compras.push("Pan", "Leche", "Huevos")
    alert(`Compras: ${Compras.join(" - ")}`)
}


function _Compras2(){
    let Compras = [];
    Compras.push("Pan", "Leche", "Huevos")
    eliminar = Compras.pop();
    alert(`Compras (pop): ${Compras.join(" - ")} \nProducto eliminado: ${eliminar}`)
}

