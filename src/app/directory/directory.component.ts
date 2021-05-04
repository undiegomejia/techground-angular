import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/api.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  public listUsers: any = [];

  constructor(private UsersData: UsersService) {}

  ngOnInit(): void {}

  getDataFromAPI() {
    this.UsersData.getData('users').subscribe((res) => {
      console.log(this.listUsers);
      this.listUsers = res;
    });
  }
}
