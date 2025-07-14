import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { numeros, tareas } from '../../../data';

@Component({
  selector: 'app-dir-atrib',
  imports: [CommonModule],
  templateUrl: './dir-atrib.html',
  styleUrl: './dir-atrib.css'
})
export class DirAtrib {

  numeros:any[] = numeros;

  aplicaEstiloNumero = (n:number) => {
      return n % 2 === 0 ? { color: 'red', fontSize: '35px' } : { color: 'green', fontSize: '40px'};
  }

  //Tareas
  tareas:any[] = tareas;

}
