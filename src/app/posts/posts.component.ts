import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public listPosts: any = [];

  constructor(private UsersData: UsersService) {}

  ngOnInit(): void {}

  getDataFromAPI() {
    this.UsersData.getData('posts').subscribe((res) => {
      console.log(this.listPosts);
      this.listPosts = res;
    });
  }
}
