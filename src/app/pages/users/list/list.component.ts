import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public listUsers: any = [];

  constructor(private router: Router, private UsersData: UsersService) {}

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
  getDataFromAPI() {
    this.UsersData.getData('users').subscribe((res) => {
      console.log(this.listUsers);
      this.listUsers = res;
    });
  }
}
