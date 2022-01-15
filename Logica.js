function Ejer1() {
    document.getElementById("Ejercicio1").innerHTML = "<p>Ejercicio 1: Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hola Diego”.</p>";
    alert("Hola Diego")
}
function Ejer2() {
    document.getElementById("Problema2").innerHTML = "<p>Ejercicio 2: Escribe un programa que escriba Hola Diego con el document.write</p>"
    document.getElementById("Ejercicio2").innerHTML = "<p>Hola Diego</p>"
}

function Ejer3() {
    document.getElementById("Problema3").innerHTML = "<p>Escribe un programa de una sola linea que escriba en la pantalla el resultado de sumar:3+5</p>"
    document.getElementById("Ejercicio3").innerHTML = "<p>3+5:" + (3 + 5);
}
function Ejer4() {
    document.getElementById("Problema4").innerHTML = "<p>Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola NomUsuario” </p>"
    nombre = prompt("Diganos su nombre por favor")
    document.getElementById("Ejercicio4").innerHTML = "<p> Hola señor " + nombre + ", lo estabamos esperando"
}
function Ejer5() {
    document.getElementById("Problema5").innerHTML = "<p>Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.</p>"
    x = parseInt(prompt("Escribe un número"))
    y = parseInt(prompt("Escribe otro número"))
    document.getElementById("Ejercicio5").innerHTML = "<p>La suma de los 2 números es:" + (x + y);
}
function Ejer6() {
    document.getElementById("Problema6").innerHTML = "<p>Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.</p>"
    x = parseInt(prompt("Escribe  un número"))
    y = parseInt(prompt("Escribe  un otro número"))
    if (x > y) {
        document.getElementById("Ejercicio6").innerHTML = "<p>El numéro mayor es:" + x + "</br>" + "<p>Y el número menor es:" + y;
    }
    else {
        document.getElementById("Ejercicio6").innerHTML = "<p>El número mayor es:" + y + "</br>" + "<p>Y el número menor es:" + x;
    }
}

function Ejer7() {
    document.getElementById("Problema7").innerHTML = "<p>Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.</p>"
    x = parseInt(prompt("Escribe un número"));
    y = parseInt(prompt("Escribe el segundo número"));
    z = parseInt(prompt("Escribe el segundo número"));
   
    if (x>y && x>z) {
        /* 100 20 50*/
        if (y>z) {
            document.getElementById("Ejercicio7").innerHTML="<p>El número mayor es "+x+" el número intermedio es "+y+" y el número menor es "+z;
        } else {
            document.getElementById("Ejercicio7").innerHTML="<p>El número mayor es "+x+" el número intermedio es "+z+" y el número menor es "+y;
        }
    }else{
        if (y>x && y>z) {
            /* 20 100 50*/
            if (x>z) {
                document.getElementById("Ejercicio7").innerHTML="<p>El número mayor es "+y+" el número intermedio es "+x+" y el número menor es "+z;
            } else {
                document.getElementById("Ejercicio7").innerHTML="<p>El número mayor es "+y+" el número intermedio es "+z+" y el número menor es "+x;
            }
        } else{
            if (z>x && z>y) {
                /* 20 50 100*/
                if (x>y) {
                    document.getElementById("Ejercicio7").innerHTML="<p>El número mayor es "+z+" el número intermedio es "+x+" y el número menor es "+y;
                } else {
                    document.getElementById("Ejercicio7").innerHTML="<p>El número mayor es "+z+" el número intermedio es "+y+" y el número menor es "+x;
                }
 
            }
        }
    }
                }

function Ejer8() {
    document.getElementById("Problema8").innerHTML="<p>Escribe un programa que pida un número y diga si es divisible por 2";
    num=parseInt(prompt("Escribe un número y te digo si es divisible por 2"));
    num_div=num/2;
    if ((num_div%2)==0) {
        document.getElementById("Ejercicio8").innerHTML="<p>El número sí es divisible entre 2,el resultado es "+num_div;
    }else{
        document.getElementById("Ejercicio8").innerHTML="<p>El número no es divisible entre 2,el resultado es "+num_div;s


    }

} 