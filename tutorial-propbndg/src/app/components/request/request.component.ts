import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  public articles: any;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get('http://scratchya.com.ar/vue/datos.php').subscribe(
      (result) => {
        this.articles = result;
      },
      (error) => {
        console.log('Something went wrong');
      }
    );
  }
}
