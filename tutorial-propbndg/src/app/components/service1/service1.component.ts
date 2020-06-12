import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css'],
})
export class Service1Component implements OnInit {
  constructor(private _articleService: ArticlesService) {}

  public artList = [];

  ngOnInit(): void {
    this.artList = this._articleService.returnFunct();
  }
}
