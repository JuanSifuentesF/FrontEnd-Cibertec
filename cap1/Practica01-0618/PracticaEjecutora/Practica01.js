import {bancoFO} from "../Bancos/bancoFO-P1.js";
import {entidades} from "../entidades.js";

const {
    obtenerPotencia,
    fnPromedioArreglo,
    fnArregloPersonasMayoresDe40PesoMayorPromedio,
    fnArregloProductosMenorCostoPorcentaje,
} = bancoFO;

const {
    Personas,
    Productos
} = entidades;

// Implementar una función lambda en JS: Que permita obtener el valor de
// la potencia de 'n' elevada a la 'x' de dos números
// los cuales se les pasa como parámetros

console.log("===Obtener la potencia===");
console.log(`El resultado de la potencia es: ${obtenerPotencia(3,3)}`);
console.log("   ")

console.log("===Obtener el promedio de un arreglo===")
console.log(fnPromedioArreglo([1,2,3,4,5]));
console.log("   ")

console.log("===Mayores de 40 y peso mayor al promedio===")
console.log(fnArregloPersonasMayoresDe40PesoMayorPromedio(Personas));
console.log("   ")

console.log("===Menor costo por tipo de producto===")
console.log(fnArregloProductosMenorCostoPorcentaje(Productos));
console.log("   ")





