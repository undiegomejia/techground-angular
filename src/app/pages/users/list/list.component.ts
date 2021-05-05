import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';
import { ApiService } from '../../../services/api.service';
import { AvatarGenerator } from 'random-avatar-generator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  public generator = new AvatarGenerator();
 

  public apiUsers: [] = []
  public listUsers: any = [];
  public userInterface:User[] = []
  public avatarUrl: string=''

  constructor(private router: Router, private ApiService: ApiService) {}

  getDataFromAPI() {
    this.ApiService.getData('users').subscribe(data => {
      this.listUsers = data;
      console.log(data)
      this.randomAvatar()
    });
  }

  randomAvatar(){
    this.avatarUrl = this.generator.generateRandomAvatar();
  }

  ngOnInit(): void {
    this.getDataFromAPI();
  }

  editUser(item: any): void {
    this.router.navigate(['edit']);
  }
  seeUser(item: any): void {
    this.router.navigate(['details']);
  }
  deleteUser(item: any): void {
    alert('Deleted');
  }
  
}
