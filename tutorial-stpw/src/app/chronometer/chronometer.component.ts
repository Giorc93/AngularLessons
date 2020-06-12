import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.css'],
})
export class ChronometerComponent implements OnInit {
  @Input() sec;
  @Output() multi = new EventEmitter();
  public min: number = 0;
  public chrono: any;

  constructor() {}

  ngOnInit(): void {}

  startChrono() {
    if (!this.chrono) {
      this.chrono = setInterval(() => {
        if (this.sec <= 58) {
          this.sec++;
          if (this.sec % 10 == 0) this.multi.emit(this.sec);
        } else {
          this.sec = 0;
          this.min++;
        }
        console.log(this.sec);
      }, 1000);
    }
  }

  stopChrono() {
    clearInterval(this.chrono);
    this.chrono = null;
  }

  restartChrono() {
    this.sec = 0;
    this.min = 0;
  }
}
