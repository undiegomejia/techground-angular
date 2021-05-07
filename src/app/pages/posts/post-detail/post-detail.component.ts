import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comments } from '../comments.interface';
import { PostService } from 'src/app/pages/posts/posts.service';
import { Post } from '../post.interface';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  public comments: Comments[] = [];
  public putPost!: Post;
  public patchPost!: Post;

  constructor(private PostService: PostService) {}

  ngOnInit(): void {
    this.PostService.commentsByParams().subscribe(
      (res) => {
        this.comments = res;
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        console.log('Done');
      }
    );

    let editedPost: Post = {
      body: 'edited-body',
      title: 'edited-test',
      userId: 1,
    };

    let patchedPost: Post = {
      title: 'Nuevo título',
    };

    this.PostService.putPost(editedPost).subscribe(
      (res) => {
        this.putPost = res;
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        console.log('Done');
      }
    );

    this.PostService.patchPost(patchedPost).subscribe(
      (res) => {
        this.patchPost = res;
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
