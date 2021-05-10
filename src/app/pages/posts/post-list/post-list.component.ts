import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/pages/posts/posts.service';
import { Post } from '../post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  public posts: Post[] = [];
  public message!: string;

  constructor(private PostService: PostService) {
    this.PostService.getPosts().subscribe(
      (res) => {
        this.posts = res;
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        console.log('Done');
      }
    );

    this.PostService.deletePost().subscribe(
      (res) => {
        this.message = 'Post Deleted';
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        console.log('Done');
      }
    );
  }

  ngOnInit(): void {}
}
