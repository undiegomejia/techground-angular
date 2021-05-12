import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/pages/posts/posts.service';
import { UserService } from 'src/app/pages/users/users.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../users/users.interface';
import { Post } from './post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  userId: number;
  id: number;
  title: string;
  body: string;

  postForm: FormGroup;

  public formActive = false;

  posts: Post[] = [];
  message!: string;
  users: User[] = [];

  constructor(
    private PostService: PostService,
    private UserService: UserService,
    public formBuilder: FormBuilder
  ) {
    this.UserService.getUsers().subscribe(
      (res) => {
        this.users = res;
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        return;
      }
    );

    this.PostService.getPosts().subscribe(
      (res) => {
        this.posts = res;
        console.log(this.posts);
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        return;
      }
    );
  }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      userId: ['', [Validators.required, Validators.minLength(3)]],
      id: ['', [Validators.required, Validators.minLength(3)]],
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  showForm() {
    this.formActive = !this.formActive;
    console.log(this.formActive);
  }

  onSubmit() {
    this.posts.unshift(this.postForm.value);
    this.formActive = !this.formActive;
  }

  borrarPost(id: number) {
    this.posts = this.posts.filter((post) => post.id != id);
  }
}
