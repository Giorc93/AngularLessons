import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'boot-menudebarra',
  templateUrl: './menudebarra.component.html',
  styleUrls: ['./menudebarra.component.css'],
})
export class MenudebarraComponent implements OnInit {
  @Input() options: string[];
  @Input() backgroundColor: string;
  @Output() pressOpt = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  press(i: number): void {
    this.pressOpt.emit(i);
  }
}
