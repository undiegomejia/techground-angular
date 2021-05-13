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
  public userId: number;
  public id: number;
  public title: string;
  public body: string;
  public postForm: FormGroup;
  public formActive = false;
  public posts: Post[] = [];
  public post: Post;
  public message!: string;
  public users: User[] = [];

  constructor(
    private PostService: PostService,
    private UserService: UserService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
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
        console.log('Data:', res);
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        console.log('Posts received');
      }
    );

    this.postForm = this.formBuilder.group({
      userId: ['', [Validators.required, Validators.minLength(3)]],
      id: ['', [Validators.required, Validators.minLength(3)]],
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  showForm() {
    this.formActive = !this.formActive;
  }

  onSubmit() {
    this.posts.unshift(this.postForm.value);
    this.formActive = !this.formActive;
    this.post = this.postForm.value;
    this.PostService.newPost(this.post).subscribe(
      (res) => {
        this.post = res;
        console.log('New Post:', res);
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        return;
      }
    );
  }

  borrarPost(id: number) {
    this.posts = this.posts.filter((post) => post.id != id);
    this.PostService.deletePost(id).subscribe(
      (res) => {
        this.post = res;
        console.log('Post deleted:', res);
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        return;
      }
    );
  }

  editPost(post: Post) {
    this.posts.splice(post.id - 1, 1, post);
  }
}
