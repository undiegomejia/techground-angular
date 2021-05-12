import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/pages/posts/post.interface';

@Component({
  selector: 'app-home-post',
  templateUrl: './home-post.component.html',
  styleUrls: ['./home-post.component.scss'],
})
export class HomePostComponent implements OnInit {
  @Input('data') post: Post;

  constructor() {}

  ngOnInit(): void {}
}
