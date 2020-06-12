import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private _http: HttpClient) {}

  returnFunct() {
    return [
      {
        code: 1,
        description: 'Potatoes',
        price: 12.33,
      },
      {
        code: 2,
        description: 'Apples',
        price: 54,
      },
      {
        code: 3,
        description: 'Watermelon',
        price: 14,
      },
    ];
  }

  webReturn() {
    return this._http.get('http://scratchya.com.ar/vue/datos.php');
  }
}
