import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AvatarGenerator } from 'random-avatar-generator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/pages/users/users.service';
import { User } from '../../users/users.interface';
import { Post } from '../post.interface';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent implements OnInit {

  constructor(private UserService: UserService, public formBuilder: FormBuilder) {}

  @Input('data') post: Post;

  @Output() delete = new EventEmitter<number>();

  @Output() edit = new EventEmitter<Post>();

  @Output() clickOutside = new EventEmitter<void>();

  public title:string
  public body:string
  public generator = new AvatarGenerator();
  public avatarUrl: string = '';
  public activeEdition = false
  public postForm: FormGroup
  public nuevoPost:Post
  public users:User[]

  ngOnInit(): void {
    this.createForm()
    this.avatarUrl = this.generator.generateRandomAvatar('avatar');
  }

  get getControl(){
    return this.postForm.controls;
  }

  createForm(){
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required, Validators.minLength(3)]],
    }) 
  }

  deletePost(id: number) {
    this.delete.emit(id);
  }

  editPost() {
    this.activeEdition = true
  }

  stopEdit(){
    this.activeEdition = false
  }

  onSubmit(post:Post){
    this.nuevoPost = this.postForm.value
    this.nuevoPost.id = this.post.id
    this.post = this.nuevoPost
    this.activeEdition = false
    this.edit.emit(this.nuevoPost)
    console.log(this.nuevoPost)
  }
  
}
