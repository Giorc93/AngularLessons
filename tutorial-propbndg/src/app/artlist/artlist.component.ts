import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artlist',
  templateUrl: './artlist.component.html',
  styleUrls: ['./artlist.component.css'],
})
export class ArtlistComponent implements OnInit {
  // @Input() data; //Declaring template variable where parent data will be stored. PROPERTY BINDING

  public data: Array<any> = [
    { code: 1, description: 'art1', price: 1.5 },
    { code: 2, description: 'art2', price: 2.5 },
    { code: 3, description: 'art3', price: 1.5 },
    { code: 4, description: 'art4', price: 4.5 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
