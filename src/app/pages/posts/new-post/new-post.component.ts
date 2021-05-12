import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { PostService } from 'src/app/pages/posts/posts.service';
import { Post } from '../post.interface';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent implements OnInit {
  @Input('data') post: Post;

  @Output() delete = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  deletePost(id: number) {
    this.delete.emit(id);
  }
}
