import { Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Opcion 5'];
  public op: number;
  public posts: any = null;
  public titles: string[] = ['UserID', 'PostId', 'Title', 'Body'];
  public user = null;

  pressed(op: number) {
    alert('Option pressed: ' + op);
  }

  pressedUser() {
    this.getUser();
  }

  constructor(private _postService: PostsService) {}

  ngOnInit() {
    this.getUser();
    this._postService.getPosts().subscribe(
      (result) => {
        this.posts = result;
        console.log(this.posts);
      },
      (error) => {
        console.log('Something went wrong');
      }
    );
  }
  getUser() {
    this._postService.getUser().subscribe(
      (result) => {
        this.user = result;
        console.log(this.user);
      },
      (error) => {
        console.log('Somenthing went wrong retrieving user  ');
      }
    );
  }
}
