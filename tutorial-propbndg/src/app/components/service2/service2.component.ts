import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css'],
})
export class Service2Component implements OnInit {
  public articlesWeb: any;

  constructor(private _serviceArticle: ArticlesService) {}

  ngOnInit(): void {}

  getArticles() {
    this._serviceArticle.webReturn().subscribe(
      (result) => {
        this.articlesWeb = result;
      },
      (error) => {
        console.log('Something went wrong');
      }
    );
  }
}
