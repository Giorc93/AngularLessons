import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'boot-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() titles: string[];
  @Input() files: any;
  public objectKeys = Object.keys; //Return names of object keys. Parameter passed on HTML, check objectKeys(file)

  constructor() {}

  ngOnInit(): void {}
}
