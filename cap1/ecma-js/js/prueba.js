import {bancoFO} from "./bancoFO.js";

const {objectoRectangulo, objConferencista} = bancoFO


objectoRectangulo.area(10, 70);

console.log(`Caracteristicas del rectangulo: ${objectoRectangulo.caracteristicas}`)

//Ejemplo1
let cloneConferencista = {...objConferencista}
cloneConferencista.nombre = "Juanito";
cloneConferencista.edad = 25;
console.log(`Conferencista (JSON): ${JSON.stringify(objConferencista)}`);
console.log(`Clonado (JSON): ${JSON.stringify(cloneConferencista)}`);

//Ejemplo2
let producto = {
    nombre: "Laptop",
    precio: 1000,
    cantidad: 10,
    stock: 200
}



let productoCarrito = {...producto, cantidad: 110, stock: 150}
console.log(`Producto (JSON): ${JSON.stringify(producto)}`);
console.log(`Producto en carrito (JSON): ${JSON.stringify(productoCarrito)}`);

