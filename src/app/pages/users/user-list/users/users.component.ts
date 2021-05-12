import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../users.interface';

import { AvatarGenerator } from 'random-avatar-generator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  name:string
  id:string
  username:string
  website:string
  email:string


  userForm: FormGroup

  public generator = new AvatarGenerator();

  avatarUrl: string = '';
  public editar = false
  usuario:User
  nuevoUsuario:User

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      website: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]]
    })  
  }

  get getControl(){
    return this.userForm.controls;
  }

  onSubmit(user:User){
    this.nuevoUsuario = this.userForm.value
    this.nuevoUsuario.id = this.user.id
    this.user = this.nuevoUsuario
    this.editar = false
    this.edit.emit(this.nuevoUsuario)
    console.log(this.nuevoUsuario)
  }

  @Input('data')user:User

  @Output() delete = new EventEmitter<number>()

  @Output() edit = new EventEmitter<User>()

  constructor(public formBuilder: FormBuilder) { 
    this.avatarUrl = this.generator.generateRandomAvatar('avatar');
    
  }

  borrarUsuario(id:number){
      alert('Este usuario está frito. Decile adiós.')
      this.delete.emit(id)   
  }


  editable(){
  this.editar = true
  }

  stopEdit(){
    this.editar = false
    }

}
