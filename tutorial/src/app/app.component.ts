import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public code: number;
  public description: string;
  public price: number;
  public arts: Array<any> = [];

  addArt() {
    for (let x = 0; x < this.arts.length; x++) {
      if (this.arts[x].code == this.code) {
        alert('An item already uses that code, try again.');
        return false;
      }
    }
    let art = {
      code: this.code,
      description: this.description,
      price: this.price,
    };

    console.log(art);
    this.arts.push(art);
    console.log(this.arts);
  }

  modArt() {
    for (let x = 0; x < this.arts.length; x++) {
      if (this.arts[x].code == this.code) {
        this.arts[x].description = this.description;
        this.arts[x].price = this.price;
        return;
      }
    }
    alert('Item does not exists');
  }

  deleteArt(codeD) {
    for (let x = 0; x < this.arts.length; x++) {
      if (this.arts[x].code == codeD) {
        this.arts.splice(x, 1);
        return;
      }
    }
    alert('Item does not exists');
  }

  selectArt(codeD) {
    for (let x = 0; x < this.arts.length; x++) {
      if (this.arts[x].code == codeD) {
        this.code = this.arts[x].code;
        this.description = this.arts[x].description;
        this.price = this.arts[x].price;
        return;
      }
    }
    alert('Item does not exists');
  }
}
