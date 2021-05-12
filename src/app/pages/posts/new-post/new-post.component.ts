import { Component, OnInit, Input } from '@angular/core';

import { PostService } from 'src/app/pages/posts/posts.service';
import { Post } from '../post.interface';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent implements OnInit {

  @Input('data')post:Post

  

  constructor() {}

  msgTrue = false;

  

  ngOnInit(): void {
   
  }
}
