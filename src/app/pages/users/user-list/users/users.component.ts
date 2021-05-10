import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../users.interface';

import { AvatarGenerator } from 'random-avatar-generator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public generator = new AvatarGenerator();

  avatarUrl: string = '';
  public editar = false

  @Input('data')user:User

  @Output() delete = new EventEmitter<number>()

  @Output() edit = new EventEmitter<number>()

  constructor() { 
    this.avatarUrl = this.generator.generateRandomAvatar();
    
  }

  borrarUsuario(id:number){
    this.delete.emit(id)
  }

  editarUsuario(){
    this.edit.emit()
  }

  editable(){
  this.editar = true
  }

  saveUser(){
    this.editar = false
    }
}
