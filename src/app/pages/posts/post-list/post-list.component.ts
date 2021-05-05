import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  public listPosts: any = [];

  constructor(private ApiService: ApiService) {}

  getDataFromAPI() {
    this.ApiService.getData('posts').subscribe((data) => {
      this.listPosts = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getDataFromAPI();
  }
}
