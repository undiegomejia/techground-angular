import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../users.interface';
import { AvatarGenerator } from 'random-avatar-generator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public name: string;
  public id: string;
  public username: string;
  public website: string;
  public email: string;
  public userForm: FormGroup;
  public generator = new AvatarGenerator();
  public avatarUrl: string = '';
  public editar = false;
  public usuario: User;
  public newUser: User;

  ngOnInit(): void {
    this.createForm();
  }

  get getControl() {
    return this.userForm.controls;
  }

  onSubmit(user: User) {
    this.newUser = this.userForm.value;
    this.newUser.id = this.user.id;
    this.user = this.newUser;
    this.editar = false;
    this.edit.emit(this.newUser);
    console.log(this.newUser);
  }

  @Input('data') user: User;

  @Output() delete = new EventEmitter<number>();

  @Output() edit = new EventEmitter<User>();

  constructor(public formBuilder: FormBuilder) {
    this.avatarUrl = this.generator.generateRandomAvatar('avatar');
  }

  deleteUser(id: number) {
    this.delete.emit(id);
  }

  editable() {
    this.editar = true;
  }

  stopEdit() {
    this.editar = false;
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      website: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
}
