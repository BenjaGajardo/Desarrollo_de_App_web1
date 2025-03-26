function _Contador(){
    let contador = 1;
    while (contador <= 5){
        alert(contador);
        contador++;
    }
}

//Ejercicio hecho
function _ContadoRR(){
    let contador = 10;
    while (contador >= 1){
        alert(contador);
        contador--;
    }
}

//Ejercicio de ejemplo
function _Numero(){
    let contador = 10;
    let array = []; // crea una lista vacia 
    while (contador >= 1){
        array.push(contador); //inserta datos en este caso la lista(array)
        contador--;
    }
    alert(`Los numeros son: ${array.join(" - ")}`); // join es para colocar entre la lista en este caso " - "
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