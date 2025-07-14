import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navega } from './comp/navega/navega';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navega],
  standalone: true,
  providers: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
