//Se le pide definir una clase Calculadora que tiene como atributos: dos números.
// Sé solícita implementar un método que permitan realizar la suma, resta, multiplicación de dichos números.
// El parámetro a enviar es el símbolo: +, -, *, / para que realice el cálculo.
// Mostrar el detalle en la consola


class Calculadora {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    operation = (operador, num1, num2) => {
        let resultado;
        switch (operador) {
            case '+':
                resultado = num1 + num2;
                console.log(`El resultado de la suma de ${num1} y ${num2} es: ${resultado}`);
                break;
            case '-':
                resultado = num1 - num2;
                console.log(`El resultado de la resta de ${num1} y ${num2} es: ${resultado}`);
                break;
            case '*':
                resultado = num1 * num2;
                console.log(`El resultado de la multiplicación de ${num1} y ${num2} es: ${resultado}`);
                break;
            case '/':
                resultado = num1 / num2;
                console.log(`El resultado de la división de ${num1} y ${num2} es: ${resultado}`);
                break
            default: return 0;
        }

    }
}
const calculadora = new Calculadora(10, 20);
calculadora.operation('+', 10, 20);
calculadora.operation('-', 10, 20);
calculadora.operation('*', 10, 20);
calculadora.operation('/', 10, 20);
