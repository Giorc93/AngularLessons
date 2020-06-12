import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tutorial-stpw';
  public message: any;

  refresh(msg) {
    this.message = msg + 'Updated every 10s';
  }
}
