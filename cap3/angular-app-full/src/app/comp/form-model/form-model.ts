import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IProducto } from '../../model/IProducto';

@Component({
  selector: 'app-form-model',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-model.html',
  styleUrls: ['./form-model.css'],
})
export class FormModel {
  private api = 'http://localhost:5000/productos';

  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  productos: IProducto[] = [];

  form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      id: [null],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      precio: [0.0, [Validators.required, Validators.min(0.01)]],
    });
    this.reset();
    this.listar();
  }

  guardar() {
    if (this.form.invalid) {
      alert('Por favor complete todos los campos correctamente');
      return;
    }
    const producto = this.form.value;

    if (producto.id) {
      // Si tiene ID, es una edición (PUT/PATCH)
      this.http.put(`${this.api}/${producto.id}`, producto).subscribe(() => {
        this.form.reset();
        this.listar();
      });
    } else {
      // Si no tiene ID, es un nuevo registro (POST)
      this.http.post(this.api, producto).subscribe(() => {
        this.form.reset();
        this.listar();
      });
    }
  }

  limpiar() {
    this.form.reset();
  }

  //metodo para resetear el formulario
  reset() {
    this.form.reset({
      id: null,
      nombre: '',
      precio: 0,
    });
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
    this.form.patchValue({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
    });
  }
}
