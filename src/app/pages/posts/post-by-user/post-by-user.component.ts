import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/users/users.service';
import { User } from 'src/app/pages/users/users.interface';
import { AvatarGenerator } from 'random-avatar-generator';

import { PostService } from 'src/app/pages/posts/posts.service';
import { Post } from '../post.interface';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-post-by-user',
  templateUrl: './post-by-user.component.html',
  styleUrls: ['./post-by-user.component.scss']
})
export class PostByUserComponent implements OnInit {
  public generator = new AvatarGenerator();

  public user:User
  public posts:Post[]

  userID:string;
  userIDSubscription:string;
  currentURL: string;
  avatarUrl: string = '';

  constructor(private PostService: PostService, private UserService: UserService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.userID =this.route.snapshot.params.id;
    this.route.paramMap.subscribe(params => {
      this.userIDSubscription = params.get("id")
    });

    this.router.events.subscribe(() =>{
      this.currentURL = this.router.url;
    })

    this.currentURL = this.router.url;
  

    this.UserService.getUserById(this.userID).subscribe(
      (res) => {
        this.user = res;
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        console.log('Done');
      }
    );


    this.PostService.getPostByUser(this.userID).subscribe(
      (res) => {
        this.posts = res;
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        console.log('Done');
      }
    );

    this.avatarUrl = this.generator.generateRandomAvatar();
    
  }

}
