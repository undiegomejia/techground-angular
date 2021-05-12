import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NewPostComponent } from './pages/posts/new-post/new-post.component';
import { PostByUserComponent } from './pages/posts/post-by-user/post-by-user.component';
import { PostDetailComponent } from './pages/posts/post-detail/post-detail.component';
import { PostListComponent } from './pages/posts/post-list.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'posts',
    component: PostListComponent,
  },
  {
    path: 'post-detail/:id',
    component: PostDetailComponent,
  },
  {
    path: 'new-post',
    component: NewPostComponent,
  },
  {
    path: 'post-by-user/:id',
    component: PostByUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
