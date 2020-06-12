import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'boot-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() user = null;
  @Output() alertClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  alert(): void {
    this.alertClick.emit();
  }
}
