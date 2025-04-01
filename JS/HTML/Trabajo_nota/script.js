function _pares(){
    let array = []
    for (i = 0; i < 101; i += 2){
        array.push(i)
    }alert(`Los numeros pares son: ${array.join(" - ")}`)
}