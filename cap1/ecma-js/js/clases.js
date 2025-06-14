export class Circulo {

    PI = 3.1416;

    constructor(radio) {
        this.radio = radio;
    }

    area() {
        console.log('El area del circulo es: ',
            this.radio, ' tiene como area: ', this.PI * this.radio * this.radio)
    }
    perimetro = () => {
        console.log('El perimetro del circulo es: ', (2 * this.PI * this.radio))
    }

    muestraCaracteristicas = () => {
        console.log('--------------------------------------')
        this.area()
        this.perimetro()
        console.log('--------------------------------------')
    }
}

export class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    area() {
        console.log('El area del rectangulo es: ',
            this.base, ' tiene como area: ', this.base * this.altura)
    }
    perimetro(){
        console.log('El perimetro del rectángulo es: ',
            this.base, ' tiene como perimetro: ', 2 * (this.base + this.altura))
    }
    muestraCaracteristicas = () => {
        console.log('--------------------------------------')
        this.area()
        this.perimetro()
        console.log('--------------------------------------')
    }
}
// Crear una clase que permita guardar personas
export class Persona {
    constructor(dni, nombre, apellido, edad, celular) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.celular = celular;
    }

    mostrarPersona = () => {
        console.log(this.dni, this.nombre, this.apellido, this.edad, this.celular);
    }
}

/*
Ejercicio 10
    Crear una clase Empleado que permita mostrar la información del empleado y calcular
        el sueldo que le corresponde al mes.
    Lógica de negocio para el sueldo mensual:
    El cargo del empleado:
    Desarrollador hrs al día: 9 h, tarifa por hora 18 soles, días al mes: 20 días.
    Gestor hrs al día: 6 h, tarifa por hora 30 soles, días al mes: 20 días.
    Analista hrs al día: 6 h, tarifa por hora 30 soles, días al mes 20 días.
    Calcular el sueldo mensual según el cargo.
*/
export class Empleado extends Persona {
    constructor(dni, nombre, apellido, edad, celular, cargo) {
        super(dni, nombre, apellido, edad, celular);
        this.cargo = cargo;
    }

    mostrarEmpleado = () => {
        console.log(this.cargo);
    }

    calcularSueldo = () => {
        let sueldoMensual = 0;
        switch (this.cargo) {
            case "Desarrollador":
                sueldoMensual = 9 * 18 * 20;
                break;
            case "Analista":
                sueldoMensual = 6 * 30 * 20;
                break
            case "Gestor":
                sueldoMensual = 6 * 30 * 20;
        }
        return console.log('El sueldo mensual es: ', sueldoMensual);
    }
}

/*
* Ejercicio 11
* Crear la clase alumno, cada alumno tiene 3 notas. Sugerencia úse la herencia.
* */

export class Alumno extends Persona {
    constructor(dni, nombre, apellido, edad, celular, notas) {
        super(dni, nombre, apellido, edad, celular);
        this.notas = notas;
    }

    mostrarAlumno = () => {
        console.log('--------------------------------------')
        console.log(this.nombre, this.apellido, this.notas)
    }

    calcularPromedio = () => {
        let promedio = (this.notas[0] + this.notas[1] + this.notas[2]) / 3;
        return console.log('El promedio de las notas es: ', promedio);

    }
}



































