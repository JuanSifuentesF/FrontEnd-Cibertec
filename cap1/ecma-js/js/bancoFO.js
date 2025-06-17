// js/bancoFO.js
// Archivo de lógica de negocio: Contiene todas las funciones y objetos a utilizar.

// =================================================================
// 1. FUNCIONES AUXILIARES
// Se definen primero como constantes para que puedan ser usadas por otras funciones sin problemas de orden.
// =================================================================

const fnElevaCuadrado = (n) => n * n;
const fnElevaCubo = (x) => x * x * x;
const modificaValor = (x) => (x % 2 === 0 ? fnElevaCuadrado(x) : fnElevaCubo(x));
const modificaregla = (x) => (x % 2 !== 0 ? fnElevaCuadrado(x) : fnElevaCubo(x));
const fnModificaValorVariante = (x) => (x % 5 === 0 ? x : modificaValor(x));

// =================================================================
// 2. OBJETO DE EXPORTACIÓN
// Agrupamos todas las funciones y datos en un solo objeto para exportarlo.
// =================================================================

export const bancoFO = {
    arreglo1: [20, 30, 60, 80, 100],
    arreglo2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    objConferencista:{
      nombre: 'Juan',
      especialista: 'Analista',
      edad: 20,
    },
    API : 'https://jsonplaceholder.typicode.com/posts?_limit=10',

    fnSuma1: function fnSuma(arreglo) {
        let resultado = 0;
        for (let i = 0; i < arreglo.length; i++) {
            resultado += arreglo[i];
        }
        console.log('Resultado de la suma es:', resultado);
        return resultado;
    },

    objectoRectangulo: {
        area: function (base, altura) {
            console.log('Área del rectángulo de base:', base, 'y altura:', altura);
        },
        caracteristicas: 'Representa el área de un nuevo edificio de altura mediana'
    },

    sumaLambda: (x, y) => {
        console.log(`La suma lambda de ${x} y ${y} es: ${x + y}`);
    },

    // Funciones que usan las auxiliares
    fnElevaCuadrado,
    fnElevaCubo,
    modificaValor,
    modificaregla,
    fnModificaValorVariante,

    fnEntregaArregloElementosAlCuadrado: (n) => {
        console.log('Arreglo original:', n);
        console.log('Arreglo al cuadrado:', n.map(fnElevaCuadrado));
    },

    fnEntregaArregloElementosAlCubo: (n) => {
        console.log('Arreglo original:', n);
        console.log('Arreglo al cubo:', n.map(fnElevaCubo));
    },

    fnElevaAlCuadradoOAlCubo: (valores) => {
        console.log('Arreglo original:', valores);
        console.log('Arreglo modificado (par^2, impar^3):', valores.map(modificaValor));
    },

    fnEntregaArregloModificadoVariante: (valores) => {
        console.log('Arreglo original:', valores);
        console.log('Arreglo modificado (variante):', valores.map(fnModificaValorVariante));
    },

    fnNumeroTerminaEn5: (valores) => {
        const resultado = valores.map((x) => {
            if (x % 5 === 0) {
                return x;
            }
            return modificaregla(x);
        });
        console.log('Arreglo modificado (termina en 5):', resultado);
    },

    fnMultiplica: (x = 10, y = 20) => {
        return x * y;
    },

    Cicle: {
        area: function (radio) {
            return Math.PI * radio * radio;
        }
    }
};