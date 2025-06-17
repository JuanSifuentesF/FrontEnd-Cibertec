//Concepto de promesa
//Es una función asíncrona, del cual no se tiene con certeza el momento en el que se ejecuta
// y si obtiene el valor requerido
// No bloquea ningún proceso que se está ejecutando.

import {bancoFO} from "./bancoFO.js";

const {API} = bancoFO;

const fnConsultarAPI = (x,mensaje) => {
    fetch(x)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    mensaje = "Consultando API";
    console.log(mensaje);
}

fnConsultarAPI(API)

