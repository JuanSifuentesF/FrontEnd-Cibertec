
export const bancoFO = {
    arreglo1 : [20,30,60,80,100],
    fnSuma1 : function fnSuma(arreglo) {
        let resultado = 0;
        for (let i = 0; i < arreglo.length; i++) {
            console.log(i);
            resultado += arreglo[i];
        }
        console.log('resultado de la suma es', resultado)
        return resultado;
    }

}
