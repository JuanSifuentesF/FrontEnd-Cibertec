import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar',
})
export class BuscarPipe implements PipeTransform {
  transform(lista: any[], texto: string): any[] {
    if (!Array.isArray(lista)) return [];

    const comparar = texto.toLowerCase();

    return lista.filter((i) =>
      Object.values(i).some((valor) =>
        valor?.toString().toLowerCase().includes(comparar)
      )
    );
  }
}

/**

export class BuscarPipe implements PipeTransform {
  transform(lista: any[], texto: string): any[] {
    if (!Array.isArray(lista)) return [];

    const comparar = texto.toLowerCase();

    return lista.filter((i) =>
      Object.values(i).some((valor) =>
        valor?.toString().toLowerCase().includes(comparar)
      )
    );
  }
}

 */
