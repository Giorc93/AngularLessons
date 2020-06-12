import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css'],
})
export class MultiComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) {}
  number: number;
  table: string;

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.number = parseInt(params.get("number"));
      this.table = '';
      for (let x = 1; x <= 10; x++) {
        let t = x * this.number;
        this.table += t + '-';
      }
    })
  }
}
