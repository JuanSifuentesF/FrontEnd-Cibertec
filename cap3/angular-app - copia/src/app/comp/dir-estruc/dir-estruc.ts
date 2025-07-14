import { Component } from '@angular/core';
import { frutas } from '../../../data';

@Component({
  selector: 'app-dir-estruc',
  imports: [],
  templateUrl: './dir-estruc.html',
  styleUrl: './dir-estruc.css'
})
export class DirEstruc {
  // Directivas estructurales
    // if
    tiempoServicio: number = 10; // Años de servicio
    
    trabajador:any = {
      nombre: "Juan Perez",
      dni: "12345678",
      tiempoServicio: 20,
      edad: 65,
    }
  
    fnEvaluaJubilacion = (ts:number):string => {
      return ts > 25 ? "Usted puede jubilarse" : "Usted no puede jubilarse";
    }
  
    // FOR
    frutas:any[] = frutas;
  
    // SWITCH
  
    actividad:number = 18; // Actividad del ciclo de vida del sistema
    textoAct1:string = "Analisis de requerimiento";
    textoAct2:string = "Elaboracion de prototipos";
    textoAct3:string = "Aceptacion de prototipos";
    textoAct4:string = "Elaboracion de analisis";
    textoAct5:string = "Elaboracion de diseño";
    textoAct6:string = "Implmeentacion del sistema";
    textoAct7:string = "Pruebas del sistema";
    textoAct8:string = "Aceptacion del sistema";
    textoAct9:string = "Despliegue del sistema";
    textoAct10:string = "Mantenimiento del sistema";
    textoDefault:string = "Actividad no encontrada";
  
    avanzarActividad=()=> {
      if (this.actividad < 10) {
        this.actividad++;
      } else {
        this.actividad = 1; // Reiniciar al llegar al final
      }
    }
    retrocederActividad=()=> {
      if (this.actividad > 1) {
        this.actividad--;
      } else {
        this.actividad = 10; // Volver al final si se retrocede desde el inicio
      }
    }
}
