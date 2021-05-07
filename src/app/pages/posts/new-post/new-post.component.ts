import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/pages/posts/posts.service';
import { Post } from '../post.interface';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent implements OnInit {
  public objPost!: Post;

  constructor(private PostService: PostService) {}

  ngOnInit(): void {
    let newPost: Post = {
      body: 'test-body',
      title: 'title-test',
      userId: 2,
    };

    this.PostService.newPost(newPost).subscribe(
      (res) => {
        this.objPost = res;
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        console.log('Done');
      }
    );
  }
}
