import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/pages/posts/posts.service';
import { Post } from '../pages/posts/post.interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private PostService: PostService) {
    this.PostService.getPosts().subscribe(
      (res) => {
        this.posts = res;
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        return;
      }
    );
  }

  ngOnInit(): void {}
}
