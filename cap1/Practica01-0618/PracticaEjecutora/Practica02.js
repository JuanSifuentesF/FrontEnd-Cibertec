import {bancoFO_p2} from "../Bancos/bancoFO-P2.js";

const {
    fnCalcularArea
} = bancoFO_p2;

// Probar con las figuras y mostrar en consola los resultados.
console.log("--- Pruebas de Cálculo de Área ---");
fnCalcularArea("T", 10, 20); // Triángulo: base 10, altura 20
fnCalcularArea("C", 10);    // Círculo: radio 10
fnCalcularArea("Q", 10);    // Cuadrado: lado 10
fnCalcularArea(undefined, 5, 8); // Usando el default para Triángulo
fnCalcularArea("X", 5); // Tipo no reconocido
fnCalcularArea("T", 10); // Faltan parámetros para Triángulo