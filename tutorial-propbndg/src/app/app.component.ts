import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}

/*

-PROPERTY BINDING:

  export class AppComponent {

    public articles: Array<any> = [
      { code: 1, description: 'art1', price: 1.5 },
      { code: 2, description: 'art2', price: 2.5 },
      { code: 3, description: 'art3', price: 1.5 },
      { code: 4, description: 'art4', price: 4.5 },
    ];

    title = 'tutorial-propbndg';

  }
}

*/
