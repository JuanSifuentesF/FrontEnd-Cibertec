// rest and default parameter
/*
* default parameter: un parametro dentro de la función podría tener un valor asignado al inicio.
* rest: [...resto] tener una cantidad variable de elementos como parametro.
*
* Ejercicio7: se tiene tres operadores telefónicos se requiere una función que permita según
* el operador telefónico verificar el tipo de beneficio para la línea del cliente respectivo.
* recibe como parámetros el cliente y el operador.
* Por default el operador es CINTEGRATEL, CENTEL, CCLARO
* Se sabe que CINTEGRATEL tiene como beneficio no cobrar los primeros tres meses
* Se sabe que CENTEL tiene como beneficio entradas gratis al cine do veces al mes
* Se sabe que CCLARO tiene como beneficio gratis por 3 meses disney play
* */

//Ejercicio 7
const muestraBeneficioXOperador = (cliente, operador = "CCLARO") => {

    console.log("cliente", cliente, "operador", operador);

    switch (operador) {
        case "CINTEGRATEL":
            console.log("no cobrar los primeros tres meses", operador);
            break;
        case "CENTEL":
            console.log("entradas gratis al cine dos veces al mes", operador);
            break;
        default:
            console.log("gratis por 3 meses disney play", operador);
            break;
    }
}

muestraBeneficioXOperador("Juan",);
muestraBeneficioXOperador("Arturo", "CINTEGRATEL");
muestraBeneficioXOperador("Isabel", "CENTEL");

//rest: [...resto] permite recibir una cantidad [n] de variables como parametro

const fnSumaRest = (...resto) => {
    let resultado = 0;
    resto.forEach(x => {
        resultado += x;
        console.log(x);
    })
    console.log('resultado', resultado);
}

fnSumaRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);