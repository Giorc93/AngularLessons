import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css'],
})
export class DiceComponent implements OnInit {
  public value1: number;
  public value2: number;
  public value3: number;
  public check: boolean;

  constructor() {}

  ngOnInit(): void {}

  randomNum(): number {
    return Math.trunc(Math.random() * 6) + 1; //Math.trunc returns int Math.rand returns float between 0-1
  }

  throwDice() {
    this.value1 = this.randomNum();
    this.value2 = this.randomNum();
    this.value3 = this.randomNum();

    if (this.value1 == this.value2 && this.value1 == this.value3) {
      this.check = true;
    }
  }
}
