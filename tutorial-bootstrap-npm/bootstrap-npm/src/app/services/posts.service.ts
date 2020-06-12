import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public posts: any;

  constructor(private _postService: HttpClient) {}

  getPosts() {
    return this._postService.get('https://jsonplaceholder.typicode.com/posts');
  }

  getUser() {
    return this._postService.get(
      'https://www.scratchya.com.ar/angular/personas.php'
    );
  }
}
