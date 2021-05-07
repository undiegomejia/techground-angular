import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostService } from 'src/app/pages/posts/posts.service';
import { Post } from '../post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {

  public posts: Post[] = [];

  constructor(private router: Router, private PostService: PostService) {
    const postObsv = this.PostService.getPosts();
    
    postObsv.subscribe((res)=>{
      this.posts = res;
    },
    (error)=>{
      console.log('Error:', error);
    },
    ()=>{
      console.log('Done');
    }
    )
  }

 

  ngOnInit(): void {
    
  }
}
