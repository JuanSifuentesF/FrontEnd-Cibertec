console.log('Bienvenido al curso de Java Front Developer');

// novedad de let
function fnSuma(arreglo) {
    let resultado = 0;
    for (let i = 0; i < arreglo.length; i++){
        console.log(i);
        resultado += arreglo[i];
    }
    console.log('resultado de la suma es', resultado)
    return resultado;
}

let arreglo1 = [20,30,60,100]
arreglo1.push(10);
console.log(arreglo1)

let Cicle = {
    area: function (radio){
        return Math.PI * radio * radio;
    }
}

let radio = 20;
let areaCirculo = Cicle.area(radio);
console.log('area del circulo cuyo radio es ',radio ,' es: ', areaCirculo);