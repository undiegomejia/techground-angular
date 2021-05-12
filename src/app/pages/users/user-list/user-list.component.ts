import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarGenerator } from 'random-avatar-generator';
import { UserService } from 'src/app/pages/users/users.service';
import { User } from '../users.interface';

@Component({
  selector: 'app-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public users: User[] = [];

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(
      (res) => {
        this.users = res;
        console.log('Res:', res);
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        console.log('Done');
      }
    );
  }

  borrarUser(id: number) {
    this.users = this.users.filter((user) => user.id != id);
    console.log(this.users);
  }

  editarUsuario(user: User) {
    this.users.splice(user.id - 1, 1, user);
    console.log(this.users);
  }

  constructor(private router: Router, private UserService: UserService) {}
}
