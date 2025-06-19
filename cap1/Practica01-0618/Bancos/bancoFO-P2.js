export const bancoFO_p2 = {

    fnCalcularArea : (tipo = "T", ...parametros) => {
        let resultado;

        switch (tipo) {
            case "T": // Triángulo: base, altura
                const baseT = parametros[0];
                const alturaT = parametros[1];
                if (baseT === undefined || alturaT === undefined) {
                    console.error("Error: Para Triángulo, se requieren base y altura.");
                    return undefined;
                }
                resultado = (baseT * alturaT) / 2;
                console.log(`Triangulo: base ${baseT}, altura ${alturaT}`)
                break;
            case "C": // Círculo: radio
                const radioC = parametros[0];
                if (radioC === undefined) {
                    console.error("Error: Para Círculo, se requiere el radio.");
                    return undefined;
                }
                resultado = Math.PI * radioC * radioC;
                console.log(`Radio : ${radioC}`)
                break;
            case "Q": // Cuadrado: lado
                const ladoQ = parametros[0];
                if (ladoQ === undefined) {
                    console.error("Error: Para Cuadrado, se requiere el lado.");
                    return undefined;
                }
                resultado = ladoQ * ladoQ;
                console.log(`Cuadrado: lado ${ladoQ}`)
                break;
            default:
                console.error("Error: Tipo de figura no reconocido. Use 'T', 'C' o 'Q'.");
                return undefined;
        }
        return resultado;
    }

}