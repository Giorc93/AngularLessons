import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'boot-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Input() color: string;
  @Input() message: string;

  constructor() {}

  ngOnInit(): void {}
}
