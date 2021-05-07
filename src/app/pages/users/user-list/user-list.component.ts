import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarGenerator } from 'random-avatar-generator';
import { UserService } from 'src/app/pages/users/users.service'
import { User } from '../users.interface';

@Component({
  selector: 'app-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  ngOnInit(): void {
    this.randomAvatar();
  }

  public generator = new AvatarGenerator();

  public users: User[] = [];
  public avatarUrl: string = '';

  constructor(private router: Router, private UserService: UserService) {
    const userObsv = this.UserService.getUsers();
    
    userObsv.subscribe((res)=>{
      this.users = res;
    },
    (error)=>{
      console.log('Error:', error);
    },
    ()=>{
      console.log('Done');
    }
    )
  }

  randomAvatar() {
    this.avatarUrl = this.generator.generateRandomAvatar();
  }

  

  editUser(item: any): void {
   
  }
  seeUser(item: any): void {
    this.router.navigate(['details']);
  }
  deleteUser(item: any): void {
    alert('Deleted');
  }
}
