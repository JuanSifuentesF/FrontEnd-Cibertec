//Funciones auxiliares

// un arreglo con la persona o personas que son mayores de 40 años
const fnArregloPersonasMayoresDe40 = (arreglo) => {
    let resultado = [];
    arreglo.forEach(x => {
        if (x.edad > 40) {
            resultado.push(x);
        }
    })
    return resultado;
};

// un arreglo con las personas que tienen un peso mayor al promedio de pesos de las
// personas del arreglo
const fnArregloPersonasPesoMayorPromedio = (arreglo) => {
    if (arreglo.length === 0) return [];
    const sumaPesos = arreglo.reduce((acc, persona)=> acc + persona.peso,0);
    const promedio = sumaPesos / arreglo.length;
    return arreglo.filter(persona => persona.peso > promedio);
};

// El producto o productos que tienen menor costo por tipo limpieza
const menorCostoLimpieza = (arreglo) => {
    let productoMenorPrecio = null;

    arreglo.forEach(producto => {
        if (producto.tipo === "limpieza" ) {
            if (productoMenorPrecio === null || producto.precio < productoMenorPrecio.precio) {
                productoMenorPrecio = producto;
            }
        }
    });
    return productoMenorPrecio;
}
const menorCostoComestible = (arreglo) => {
    let productoMayorPrecio = null;

    arreglo.forEach(producto => {
        if (producto.tipo === "comestible" ) {
            if (productoMayorPrecio === null || producto.precio > productoMayorPrecio.precio) {
                productoMayorPrecio = producto;
            }
        }
    });
    return productoMayorPrecio;
}

// Productos que se encuentran con stock final por debajo del 20% de su stock inicial
const fnArregloProductosStockFinalPorDebajo = (arreglo) => {
    return arreglo.filter(producto => producto.stock_final < producto.stock_inicial * 0.2);
}

export const bancoFO = {
    obtenerPotencia : (n, x) => n ** x,

    fnPromedioArreglo : (arreglo) => {
        let resultado = 0;
        arreglo.forEach(x => {
            resultado += x;
        })
        return `El promedio es: ${resultado / arreglo.length}`
    },

    //Recibe como parametro un arreglo de objetos personas y devuelva
    // un arreglo con la persona o personas que son mayores de 40 años
    // un arreglo con las personas que tienen un peso mayor al promedio de pesos
    // de las personas del arreglo
    fnArregloPersonasMayoresDe40PesoMayorPromedio: (Personas) => {
        return {
            mayoresDe40: fnArregloPersonasMayoresDe40(Personas),
            pesoMayorPromedio: fnArregloPersonasPesoMayorPromedio(Personas)
        };
    },
    //El producto o productos que tienen el menor costo por cada tipo
    fnArregloProductosMenorCostoPorcentaje : (Productos) => {
        return {
            menorCostoLimpieza : menorCostoLimpieza(Productos),
            menorCostoComestible : menorCostoComestible(Productos),
            productosPorDebajoDel20: fnArregloProductosStockFinalPorDebajo(Productos)
        };
    }
}