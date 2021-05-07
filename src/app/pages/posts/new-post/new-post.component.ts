import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PostService } from 'src/app/pages/posts/posts.service';
import { Post } from '../post.interface';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent implements OnInit {
  newPostForm = new FormGroup({
    title: new FormControl(''),
    userId: new FormControl(''),
    body: new FormControl(''),
  });
  public objPost!: Post;

  constructor(private PostService: PostService) {}

  msgTrue = false;

  addNewPost() {
    const formData = this.newPostForm.value;
    console.log(formData);

    this.PostService.newPost(formData).subscribe(
      (res) => {
        this.msgTrue = true;
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

  ngOnInit(): void {}
}
