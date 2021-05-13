import { Component, OnInit } from '@angular/core';
import { Comments } from '../comments.interface';
import { PostService } from 'src/app/pages/posts/posts.service';
import { UserService } from 'src/app/pages/users/users.service';
import { Post } from '../post.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { AvatarGenerator } from 'random-avatar-generator';
import { User } from '../../users/users.interface';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {

  public generator = new AvatarGenerator();
  public comments: Comments[] = [];
  public postById:Post;
  public user: User;
  public avatarUrl: string = '';
  public postID:string;
  public postIDSubscription:string;
  public currentURL: string;

  constructor(private PostService: PostService, private UserService: UserService, private router: Router,
    private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.postID =this.route.snapshot.params.id;
    this.route.paramMap.subscribe(params => {
      this.postIDSubscription = params.get("id")
    });

    this.currentURL = this.router.url;

    this.router.events.subscribe(() =>{
      this.currentURL = this.router.url;
    })

    this.PostService.commentsByParams(this.postID).subscribe(
      (res) => {
        this.comments = res;
      },
      (error) => {
        console.error('Error:', error);
      },
      () => {
        console.log('Done');
      }
    );

    this.PostService.getPostById(this.postID).subscribe(
      (res) => {
        this.postById = res;
        console.log('Res:', res);
      },
      (error) => {
        console.error('Error:', error);
      },
      () => {
        console.log('Done');
      }
    );

    this.UserService.getUserById(this.postID).subscribe(
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

    this.avatarUrl = this.generator.generateRandomAvatar('avatar');
  }
}
