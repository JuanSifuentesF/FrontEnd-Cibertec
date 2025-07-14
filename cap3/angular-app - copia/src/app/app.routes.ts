import { Routes } from '@angular/router';
import { Interpolacion } from './comp/interpolacion/interpolacion';
import { Inicio } from './comp/inicio/inicio';
import { DirEstruc } from './comp/dir-estruc/dir-estruc';
import { PaginaNoFound } from './comp/pagina-no-found/pagina-no-found';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'interpolacion', component: Interpolacion },
  { path: 'directiva-estructural', component: DirEstruc },

  {
    path: 'directiva-atributos',
    loadComponent: () =>
      import('./comp/dir-atrib/dir-atrib').then((m) => m.DirAtrib),
  },
  {
    path: '**',
    component: PaginaNoFound,
  },
];
