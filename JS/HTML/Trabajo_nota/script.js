function _pares(){
    let array = []
    for (i = 2; i < 201; i += 2){
        array.push(i)
    }alert(`Los primeros 100 numeros pares son:  ${array.join(" - ")}`)
}