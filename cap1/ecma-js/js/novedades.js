import {Circulo, Rectangulo, Persona, Empleado, Alumno} from './clases.js';
import {bancoFO} from './bancoFO.js'

const {arreglo1,fnSuma1} = bancoFO

let alum1 = new Alumno(46925198, "Juan", "Sifuentes", 34, 987654321, [10, 20, 18]);
alum1.mostrarAlumno();
alum1.calcularPromedio();

let alum2 = new Alumno(46925198, "Juan", "Sifuentes", 34, 987654321, [10, 20, 18]);
alum2.mostrarAlumno();
alum2.calcularPromedio();

let empleado1 = new Empleado(46925198, "Juan", "Perez", 20, 987654321, "Analista");
empleado1.mostrarEmpleado();
empleado1.calcularSueldo();

let empleado2 = new Empleado(46925198, "Juan", "Perez", 20, 987654321, "Desarrollador");
empleado2.mostrarEmpleado();
empleado2.calcularSueldo();

let empleado3 = new Empleado(46925198, "Juan", "Perez", 20, 987654321, "Gestor");
empleado3.mostrarEmpleado();
empleado3.calcularSueldo();

let persona1 = new Persona(12345678, "Juan", "Perez", 20, 987654321)
persona1.mostrarPersona();

let obj = new Circulo(10);
obj.area();
obj.perimetro()
obj.muestraCaracteristicas();

let objR1 = new Rectangulo(10, 20);
objR1.area();
objR1.perimetro();
objR1.muestraCaracteristicas();

console.log('Bienvenido al curso de Java Front Developer<----');

// // novedad de let
// function fnSuma(arreglo) {
//     let resultado = 0;
//     for (let i = 0; i < arreglo.length; i++) {
//         console.log(i);
//         resultado += arreglo[i];
//     }
//     console.log('resultado de la suma es', resultado)
//     return resultado;
// }

//let arreglo1 = [20, 30, 60, 100]
arreglo1.push(10);
console.log(arreglo1)

let Cicle = {
    area: function (radio) {
        return Math.PI * radio * radio;
    }
}

let radio = 20;
let areaCirculo = Cicle.area(radio);
console.log('area del circulo cuyo radio es ', radio, ' es: ', areaCirculo);

// Ejemplo 2
let objectooRectangulo = {
    area: function (base, altura) {
        console.log('base: ', base, 'altura: ', altura);
    },
    caracteristicas: 'representa el area de un nuevo edificio de altura mediana'
}

objectooRectangulo.area(10, 20);
console.log('caracteristica', objectooRectangulo.caracteristicas);

objectooRectangulo.caracteristicas = 'representa el area de un nuevo edificio de altura alta';
console.log('caracteristica', objectooRectangulo.caracteristicas);

//funcion anonima no pertenece ecmajs 6 sino ecmajs 5
const suma = function (a, b) {
    console.log('la suma de a: ', a, 'b: ', b, 'es: ', a + b);
}

suma(10, 20);

console.log('Función lambda ecmaJS 6 ()=> {}');
const sumaLambda = (x, y) => {
    console.log('la suma x: ', x, 'y: ', y, 'es: ', x + y);
};

sumaLambda(8, 9);
sumaLambda(10, 20);

let valores_numericos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let valores_cuadrados = valores_numericos.map(x => x * x);

console.log('valores numericos', valores_numericos);
console.log('valores cuadrados', valores_cuadrados);

//variante del ejercicio se eleva al cuadrado los elementos de un arreglo
const fnElevaCuadrado = (n) => {
    return n * n;
}

let nuevoArreglo = valores_numericos.map(n => fnElevaCuadrado(n));
console.log('nuevo arreglo', nuevoArreglo);

//muestra dos números elevados al cuadrado
let n1 = 9;
let n2 = 8;
console.log('n1: ', n1, 'elevado al cuadrado: ', fnElevaCuadrado(n1));
console.log('n2: ', n2, 'elevado al cuadrado: ', fnElevaCuadrado(n2));

//variante2 del ejercicio se eleva al cuadrado los elementos de un arreglo
const fnEntregaArregloElementosAlCuadrado = (n) => {
    console.log('arreglo original: ', n);
    console.log('arreglo original al cuadrado: ', (n.map(x => fnElevaCuadrado(x))))
}

fnEntregaArregloElementosAlCuadrado([1, 2, 3, 4]);

//ejemplo3 función que muestra un arreglo de valores al cubo
const fnElevaCubo = (x) => {
    return x * x * x
}

const fnEntregaArregloElementosAlCubo = (n) => {
    console.log('arreglo original: ', n);
    console.log('arreglo original al cubo: ', (n.map(x => fnElevaCubo(x))))
}

fnEntregaArregloElementosAlCubo([1, 2, 3, 4]);

//Función lambda que entregue los elementos de un arreglo.
//Si el número del arreglo es par, eleva al cuadraro
//Si es impar eleva al cubo.

const modificaValor = (x) => {
    return x % 2 === 0 ? fnElevaCuadrado(x) : fnElevaCubo(x);
}

const fnElevaAlCuadradoOAlCubo = (valores) => {
    console.log('arreglo original: ', valores);
    console.log('arreglo modificado según regla del negocio: ', (valores.map(x => modificaValor(x))))
}

fnElevaAlCuadradoOAlCubo([1, 2, 3, 4]);

//Ejercicio, función lambda que permita elevar al cuadrado si es impar, elevar al cubo si es par los elementos de un arreglo
//Considerar que si el numero termina en 5 no se eleva ni al cubo ni al cuadrado, se mantiene.

//Primera forma
const modificaregla = (x) => {
    return x % 2 !== 0 ? fnElevaCuadrado(x) : fnElevaCubo(x);
}

const fnNumeroTerminaEn5 = (valores) => {
    valores.map((x, index) => {
        if (x % 2 !== 0 && x % 5 === 0) {
            console.log('numero: ', x, 'no se eleva ni al cubo ni al cuadrado, se mantiene', (valores[index] = x));
        } else {
            console.log(valores[index] = modificaregla(x))
        }
    })
}

fnNumeroTerminaEn5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Segunda forma
const fnModificaValorVariante = (x) => {
    return (x % 5 === 0 ? x : (modificaValor(x)))
};

const fnEntregaArregloModificadoVariante = (valores) => {
    console.log('arreglo original', valores)
    console.log('arreglo modificado según regla de negocio variante 1', (valores.map(x => fnModificaValorVariante(x))))
}

fnEntregaArregloModificadoVariante([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// default parameter
const fnMultiplica = (x = 10, y = 20) => {
    return x * y;
}

let resultado_multiplica = fnMultiplica();
console.log('resultado', resultado_multiplica);

let resultado_multiplica_2 = fnMultiplica(undefined, 5)
console.log('resultado_2', resultado_multiplica_2);
console.log("")


console.log("--------Novedad template literal---------");
// Novedad template literal
const fnMensaje = (nombre, genero = "Sr", mensaje = "Hola") => {
    console.log(`${mensaje} ${genero} ${nombre} `)
}

fnMensaje("Luis")
fnMensaje("Juan", "Sr")
fnMensaje("Pedro", "Sr", "Hola")
console.log("")

console.log("--------Destructuración de arreglos---------");
let numerosD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [a, , c] = numerosD;

console.log(numerosD[0])
console.log(a)
console.log(c)

console.log("")

console.log("--------Destructuración de objetos---------");
let usuario = {
    nombre: "Juan",
    email: "Juan@admin.com",
    estado: true
}

const {nombre, email} = usuario;

console.log(`
usuario : ${nombre}
correo : ${email}
`);

































