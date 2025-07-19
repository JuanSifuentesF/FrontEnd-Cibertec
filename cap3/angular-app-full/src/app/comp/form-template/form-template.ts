import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IProducto } from '../../model/IProducto';

@Component({
  selector: 'app-form-template',
  imports: [FormsModule],
  templateUrl: './form-template.html',
  styleUrls: ['./form-template.css'],
})
export class FormTemplate {
  api = 'http://localhost:5000/productos';

  // Inicializamos el producto
  // con valores por defecto
  producto: IProducto = {
    nombre: '',
    precio: 0,
  };
  // Para listar los productos
  // Inicializamos como un arreglo vacío
  productos: IProducto[] = [];

  constructor(private http: HttpClient) {
    this.listar();
  }

  registrar(form: NgForm) {
    if (!this.producto.nombre || !this.producto.precio) {
      alert('Por favor complete todos los campos');
      return;
    }

    if (this.producto.id) {
      // Si tiene ID, es una edición (PUT/PATCH)
      this.http
        .put(`${this.api}/${this.producto.id}`, this.producto)
        .subscribe(() => {
          form.resetForm();
          this.listar();
          this.producto = { nombre: '', precio: 0 }; // Resetear el objeto
        });
    } else {
      // Si no tiene ID, es un nuevo registro (POST)
      this.http.post(this.api, this.producto).subscribe(() => {
        form.resetForm();
        this.listar();
      });
    }
  }

  reset(form: NgForm) {
    form.resetForm();
    this.producto = {
      nombre: '',
      precio: 0,
    };
  }

  listar() {
    this.http.get<IProducto[]>(this.api).subscribe((data) => {
      this.productos = [...data];
    });
  }

  eliminar(id: number) {
    if (!id) return; // Validación opcional por si `id` es undefined

    this.http.delete(`${this.api}/${id}`).subscribe(() => {
      this.listar(); // Refresca la lista después de eliminar
    });
  }
  editar(producto: IProducto) {
    this.producto = { ...producto }; // Copia el producto a editar
  }
}
