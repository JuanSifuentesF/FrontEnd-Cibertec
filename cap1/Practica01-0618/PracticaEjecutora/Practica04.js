// Se le pide definir las clases necesarias para implementar una
// solución que permita mostrar aquellos alumnos que aprobaron un curso específico.
// Se sabe que cada alumno tiene 4 notas asociadas por curso.
// Deberá calcular el promedio de notas eliminando la nota más baja.
// Para cada curso debe mostrar el arreglo de alumnos matriculados con la
// siguiente información: datos del alumno, sus notas, nota eliminada, promedio obtenido
// y si esta o no aprobado. El promedio debe ser mayor a 13 para aprobar.
// Deberá generar un mínimo de 6 alumnos y 3 cursos a ser evaluados.
// Sugerencia utilíce herencia, spreed operator, default parameter, templete literals donde sea necesario.

// Clase Alumno
export class Alumno {
    constructor(nombre, apellido, edad, notas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.notas = notas;
    }

    obtenerNotaEliminada() {
        return Math.min(...this.notas);
    }

    calcularPromedio() {
        const notasSinMenor = [...this.notas];
        const menor = this.obtenerNotaEliminada();
        notasSinMenor.splice(notasSinMenor.indexOf(menor), 1);
        const promedio = notasSinMenor.reduce((a, b) => a + b, 0) / notasSinMenor.length;
        return promedio;
    }

    estaAprobado() {
        return this.calcularPromedio() > 13;
    }

    mostrarInfo() {
        const notaEliminada = this.obtenerNotaEliminada();
        const promedio = this.calcularPromedio();
        const aprobado = this.estaAprobado() ? "Sí" : "No";
        console.log(`Alumno: ${this.nombre} ${this.apellido}, Edad: ${this.edad}, Notas: [${this.notas.join(", ")}], Nota eliminada: ${notaEliminada}, Promedio: ${promedio.toFixed(2)}, ¿Aprobado?: ${aprobado}`);
    }
}

// Clase Curso
export class Curso {
    constructor(nombre, alumnos = []) {
        this.nombre = nombre;
        this.alumnos = alumnos;
    }

    mostrarAlumnos() {
        console.log(`Curso: ${this.nombre}`);
        this.alumnos.forEach(alumno => alumno.mostrarInfo());
    }

    mostrarAprobados() {
        console.log(`Aprobados en el curso ${this.nombre}:`);
        this.alumnos.filter(a => a.estaAprobado()).forEach(a => a.mostrarInfo());
    }
}

// Crear alumnos
const alumno1 = new Alumno("Juan", "Pérez", 20, [12, 15, 14, 10]);
const alumno2 = new Alumno("Ana", "García", 21, [16, 18, 13, 17]);
const alumno3 = new Alumno("Luis", "Torres", 22, [11, 14, 12, 13]);
const alumno4 = new Alumno("María", "López", 23, [19, 17, 18, 16]);
const alumno5 = new Alumno("Pedro", "Sánchez", 20, [10, 11, 12, 13]);
const alumno6 = new Alumno("Lucía", "Ramírez", 21, [15, 14, 16, 17]);

// Asignar alumnos a cursos (pueden repetirse o ser distintos)
const curso1 = new Curso("Matemática", [alumno1, alumno2, alumno3]);
const curso2 = new Curso("Historia", [alumno4, alumno5, alumno6]);
const curso3 = new Curso("Ciencias", [alumno1, alumno4, alumno6]);

// Mostrar alumnos y aprobados por curso
curso1.mostrarAlumnos();
curso1.mostrarAprobados();

curso2.mostrarAlumnos();
curso2.mostrarAprobados();

curso3.mostrarAlumnos();
curso3.mostrarAprobados();

