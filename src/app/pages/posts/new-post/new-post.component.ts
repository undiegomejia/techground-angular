import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AvatarGenerator } from 'random-avatar-generator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/pages/users/users.service';
import { PostService } from 'src/app/pages/posts/posts.service';
import { User } from '../../users/users.interface';
import { Post } from '../post.interface';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent implements OnInit {
  constructor(
    private UserService: UserService,
    private PostService: PostService,
    public formBuilder: FormBuilder
  ) {}

  @Input('data') post: Post;

  @Output() delete = new EventEmitter<number>();

  @Output() edit = new EventEmitter<Post>();

  @Output() clickOutside = new EventEmitter<void>();

  public title: string;
  public body: string;
  public id: number;
  public userId: number;
  public generator = new AvatarGenerator();
  public avatarUrl: string = '';
  public activeEdition = false;
  public postForm: FormGroup;
  public newPost: Post;
  public posts: Post;
  public users: User[];

  ngOnInit(): void {
    this.createForm();
    this.avatarUrl = this.generator.generateRandomAvatar('avatar');
  }

  get getControl() {
    return this.postForm.controls;
  }

  createForm() {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required, Validators.minLength(3)]],
      id: ['', [Validators.required, Validators.minLength(2)]],
      userId: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  deletePost(id: number) {
    this.delete.emit(id);
  }

  editPost() {
    this.activeEdition = true;
  }

  stopEdit() {
    this.activeEdition = false;
  }

  onSubmit(post: Post) {
    this.newPost = this.postForm.value;
    this.newPost.id = this.post.id;
    this.newPost.userId = this.post.userId;
    this.post = this.newPost;
    this.activeEdition = false;
    this.edit.emit(this.newPost);
    this.PostService.putPost(this.newPost).subscribe(
      (res) => {
        this.posts = res;
        console.log('Put:', res);
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
