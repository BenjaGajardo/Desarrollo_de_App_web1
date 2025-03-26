function _Contador(){
    let contador = 1;
    while (contador <= 10){
        alert(contador);
        contador++;
    }
}

function _Numero(){
    let contador = 10;
    while (contador >= 1){
        alert(contador);
        contador--;
    }
}

function _Numeros(){
    let suma = 0
    for (let i = 1; i<= 5; i++){
        suma += i; 
    } alert("Esta es la suma de los 5 digitos: " + suma)
}

function _Multiplo(){
    for (let i = 2; i<= 10; i += 2){
        alert(i)
    }
}