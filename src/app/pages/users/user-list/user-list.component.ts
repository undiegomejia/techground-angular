import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/users/users.service';
import { User } from '../users.interface';

@Component({
  selector: 'app-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public users: User[] = [];
  public user: User;
  PostService: any;

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(
      (res) => {
        this.users = res;
        console.log('Data:', res);
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        console.log('Users received');
      }
    );
  }

  borrarUser(id: number) {
    this.users = this.users.filter((user) => user.id != id);
    console.log(this.users);
    this.UserService.deleteUser(id).subscribe(
      (res) => {
        this.user = res;
        console.log('User deleted:', res);
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        return;
      }
    );
  }

  editarUsuario(user: User) {
    this.users.splice(user.id - 1, 1, user);
    console.log(this.users);
    this.UserService.editUser(user).subscribe(
      (res) => {
        this.user = res;
        console.log('User edited:', res);
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        return;
      }
    );
  }
}
