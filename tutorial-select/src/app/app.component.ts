import { Component, ViewChild } from '@angular/core';
import { SelectorComponent } from './selector/selector.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('select1') select1: SelectorComponent;
  @ViewChild('select2') select2: SelectorComponent; //Acces to child class from parent class. Defining variable on template

  title = 'tutorial-select';

  setSelector1(v: number) {
    this.select1.setNum(v);
  }

  setSelector2(v: number) {
    this.select2.setNum(v);
  }
}
