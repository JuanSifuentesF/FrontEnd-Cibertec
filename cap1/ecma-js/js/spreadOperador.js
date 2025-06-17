// Novedad 7, spread operador
// Concepto:
/*
El spread operador (`...`) permite expandir elementos de un iterable (como un array u objeto)
en lugares donde se esperan múltiples elementos.
* */

import {bancoFO} from "./bancoFO.js";

const {arreglo1,arreglo2} = bancoFO;

let cloneNumeros = [...arreglo1];
cloneNumeros.push(100);
console.log(`arreglo de números original: ${arreglo1}`)
console.log(`arreglo de números clonado: ${cloneNumeros}`)

let mezcla_numeros = [arreglo1,300,arreglo2];
console.log(`mezcla de arreglos: ${mezcla_numeros}`)


