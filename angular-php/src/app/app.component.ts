import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './services/articles.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  articulos = null;

  art = {
    code: null,
    description: null,
    price: null,
  };

  constructor(private articulosServicio: ArticulosService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.articulosServicio
      .recuperarTodos()
      .subscribe((result) => (this.articulos = result));
  }

  alta() {
    this.articulosServicio.alta(this.art).subscribe((datos) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(codigo) {
    this.articulosServicio.baja(codigo).subscribe((datos) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.articulosServicio.modificacion(this.art).subscribe((datos) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  seleccionar(codigo) {
    this.articulosServicio
      .seleccionar(codigo)
      .subscribe((result) => (this.art = result[0]));
  }

  hayRegistros() {
    return true;
  }
}
