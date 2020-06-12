import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  url = 'http://localhost/testserve/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) {}

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(article) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(article), {
      responseType: 'text',
    });
  }

  baja(code: number) {
    return this.http.get(`${this.url}baja.php?code=${code}`);
  }

  seleccionar(code: number) {
    return this.http.get(`${this.url}seleccionar.php?code=${code}`);
  }

  modificacion(article) {
    return this.http.post(
      `${this.url}modificacion.php`,
      JSON.stringify(article)
    );
  }
}
