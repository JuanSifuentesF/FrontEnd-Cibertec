import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.html',
  styleUrl: './interpolacion.css'
})
export class Interpolacion {

  // tema de interpolación
    protected title = 'Cap3 Angular version 20'; // Varaible de JavaScript
    subtitulo : string = "Revision de interpolacion Angular"; // Variable de TypeScript
    tema = "instalanción y configuracion de bootstrap";
    tema_interpolacion:string = "Interpolación en Angular";
    n1:number = 20;
    n2:number = 5;
    n3:number = 3;
    n4:number = 2;
    
    // Generar una función que permita la operación de elevar un x al y, utilizando interpolación
    fnElevaXaY = (x:number, y:number):number => {
      return Math.pow(x, y);
    }
  
  
    dolares: number = 0;
    tipoCambioDS: number = 3.6; // Tasa de cambio de soles a dólares
    // Generar un metodo que permita realizar el cambio de soles a dolares
    // Se sabe que 1 dolar = 3.6 soles, utilizar interpolacion para mostrar el resultado
    fnCambiaSolesADolares = (soles:number):number => {
      this.dolares = Math.round(soles / this.tipoCambioDS * 100) / 100; // Redondear a dos decimales
      return this.dolares;
    }
  
    fnCambioDolaresASoles = (dolares:number):number => {
      return Math.round(dolares * this.tipoCambioDS * 100) / 100; // Redondear a dos decimales
    };  
  

}
