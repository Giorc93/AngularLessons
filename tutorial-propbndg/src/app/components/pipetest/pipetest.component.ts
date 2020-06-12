import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipetest',
  templateUrl: './pipetest.component.html',
  styleUrls: ['./pipetest.component.css'],
})
export class PipetestComponent implements OnInit {
  public vector: any = [1, 2, 3, 4, 5, 6, 7];

  constructor() {}

  ngOnInit(): void {}
}
