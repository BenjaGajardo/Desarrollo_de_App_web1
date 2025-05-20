console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.
function declararVariables() {
    // Tu código aquí
    let ahora = parseInt(prompt ("Ingrese Año actual: ")); // parseInt transforma a string a number // prompt solicita que ingreses un valor y pide ingresar un texto 
    let fecha_nac = parseInt(prompt("Ingrese fecha de nacimiento: "));
    resultado = ahora - fecha_nac;
    alert("edad: " + resultado)
    }
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    // Tu código aquí
    let var1 = prompt("Ingrese un valor: ");
    let var2= var1;
    alert("El valor de var2 es igual a var1\n" + "var1:" + var1 + "\nvar2:" + var2);
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
    let num1 = parseInt(prompt("ingrese primer numero: "));
    let num2 = parseInt(prompt ("ingrese segundo numero: "));
    let num3 = parseInt(prompt ("ingrese tercer numero: "));
    let suma = num1 + num2 + num3;
    let resta = num1 - num3;
    let multiplicacion = num2 * num3;
    let division = num1 / 120;
    alert("Resultado suma: " + suma + "\nResultado resta: " + resta + "\nResultado multiplicacion: " + multiplicacion + "\nResultado division: " + division);
    
    // Tu código aquí
    }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje. (.length)
    function manipularCadenas() {
        let direccion = prompt("Ingrese su dirección: ");
        let n_casa = prompt("Ingrese número de casa: "); // Lo dejamos como cadena
        let cadena = direccion + " " + n_casa;
        let longitud = cadena.length;
        let antepenultimo = cadena.charAt(cadena.length - 3);
        alert(`La dirección es: ${cadena}
        \nTu número de casa es: ${n_casa}
        \nLargo de la cadena: ${longitud}
        \nCaracter antepenúltimo: ${antepenultimo}`);
    }
    