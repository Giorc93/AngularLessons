import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
})
export class SelectorComponent implements OnInit {
  @Input() min: number;
  @Input() max: number;
  public value: number;

  constructor() {}

  ngOnInit(): void {
    this.value = this.min;
  }

  addNum() {
    if (this.value >= this.min && this.value < this.max) {
      this.value++;
    }
  }

  subsNum() {
    if (this.value > this.min && this.value <= this.max) {
      this.value--;
    }
  }

  setNum(num: number) {
    if (num >= this.min && num <= this.max) {
      this.value = num;
    }
  }
}
