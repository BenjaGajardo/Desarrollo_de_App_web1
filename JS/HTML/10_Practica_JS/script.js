function _multiplicar(){
    let n = parseInt(prompt("Ingresar un numero para  multiplicar: ")) 
    let array = []
    for (let i = 1; i<= 10; i++){
        array.push(n * i);
    }alert(`Resultados de multiplicación: ${array.join(" - ")}`)
}