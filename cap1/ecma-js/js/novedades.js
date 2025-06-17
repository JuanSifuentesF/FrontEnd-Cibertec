// js/novedades.js
// Archivo de ejecución: Importa y utiliza la lógica y las clases.

import { Circulo, Rectangulo, Persona, Empleado, Alumno } from './clases.js';
import { bancoFO } from './bancoFO.js';

// Desestructuramos el objeto bancoFO para acceder a sus métodos y propiedades directamente
const {
    arreglo1,
    fnSuma1,
    objectoRectangulo,
    sumaLambda,
    fnElevaCuadrado,
    fnEntregaArregloElementosAlCuadrado,
    fnElevaCubo,
    modificaValor,
    fnEntregaArregloElementosAlCubo,
    fnElevaAlCuadradoOAlCubo,
    fnEntregaArregloModificadoVariante,
    fnNumeroTerminaEn5,
    modificaregla,
    Cicle,
    fnMultiplica,
    fnModificaValorVariante,
} = bancoFO;

console.log('--- Pruebas con Clases ---');
let alum1 = new Alumno(46925198, "Juan", "Sifuentes", 34, 987654321, [10, 20, 18]);
alum1.mostrarAlumno();
alum1.calcularPromedio();

let empleado1 = new Empleado(46925198, "Juan", "Perez", 20, 987654321, "Analista");
empleado1.mostrarEmpleado();
empleado1.calcularSueldo();

let persona1 = new Persona(12345678, "Juan", "Perez", 20, 987654321);
persona1.mostrarPersona();

let obj = new Circulo(10);
obj.muestraCaracteristicas();

let objR1 = new Rectangulo(10, 20);
objR1.muestraCaracteristicas();
console.log('---------------------------\n');


console.log('--- Pruebas con Métodos de bancoFO ---');
// Modificando un arreglo
console.log('Arreglo original:', arreglo1);
arreglo1.push(10);
console.log('Arreglo modificado:', arreglo1);
console.log('');

// Usando un método dentro de un objeto anidado
let radio = 20;
let areaCirculo = Cicle.area(radio);
console.log(`El área del círculo cuyo radio es ${radio} es: ${areaCirculo}`);
console.log('');

// Funciones lambda y map
sumaLambda(8, 9);
let valores_numericos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
fnEntregaArregloElementosAlCuadrado(valores_numericos);
fnEntregaArregloElementosAlCubo(valores_numericos);
console.log('');

// Funciones con lógica condicional
fnElevaAlCuadradoOAlCubo([1, 2, 3, 4]);
fnNumeroTerminaEn5([1, 2, 3, 4, 5, 10, 15, 21]);
fnEntregaArregloModificadoVariante([1, 2, 3, 4, 5, 10, 15, 21]);
console.log('');


// Parámetros por defecto (Default Parameters)
let resultado_multiplica_1 = fnMultiplica();
console.log('Resultado multiplica con defaults:', resultado_multiplica_1);
let resultado_multiplica_2 = fnMultiplica(5, undefined); // y tomará el valor por defecto
console.log('Resultado multiplica con un undefined:', resultado_multiplica_2);
console.log('');


// Desestructuración de arreglos
console.log('--- Desestructuración de Arreglos ---');
let numerosD = [100, 200, 300, 400];
const [a, b, , d] = numerosD; // Se omite el tercer elemento
console.log(`Del arreglo [${numerosD}], extraemos a=${a}, b=${b}, d=${d}`);
console.log('');


// Desestructuración de objetos
console.log('--- Desestructuración de Objetos ---');
let usuario = {
    nombre: "Ana",
    email: "ana@servidor.com",
    estado: true
};
const { nombre, email } = usuario;
console.log(`Datos del usuario:
Nombre: ${nombre}
Correo: ${email}
`);