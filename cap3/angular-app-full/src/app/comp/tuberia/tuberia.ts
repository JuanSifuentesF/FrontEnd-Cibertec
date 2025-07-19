import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { frutas } from '../../../data';
import { FormsModule } from '@angular/forms';
import { BuscarPipe } from '../../pipes/buscar-pipe';

@Component({
  selector: 'app-tuberia',
  imports: [DatePipe, CommonModule, FormsModule, BuscarPipe],
  templateUrl: './tuberia.html',
  styleUrl: './tuberia.css',
})
export class Tuberia {
  fecha = new Date();
  precio: number = 12345612.123756;
  direccion: string = 'Calle Falsa 123, Ciudad, País';
  marca: string = 'Marca de ejemplo';
  IGV: number = 0.18; // 18% de IGV

  usuario = {
    nombre: 'Juan Perez',
    edad: 30,
    cargo: 'Desarrollador',
  };

  frutas = frutas;
  filtro: string = '';
}
