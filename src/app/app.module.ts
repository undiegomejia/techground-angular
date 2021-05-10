import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { UserService } from 'src/app/pages/users/users.service';
import { PostService } from 'src/app/pages/posts/posts.service';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { PostDetailComponent } from './pages/posts/post-detail/post-detail.component';
import { PostListComponent } from './pages/posts/post-list/post-list.component';
import { NewPostComponent } from './pages/posts/new-post/new-post.component';
import { PostByUserComponent } from './pages/posts/post-by-user/post-by-user.component';
import { UsersComponent } from './pages/users/user-list/users/users.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    FooterComponent, 
    UserListComponent, 
    PostDetailComponent, 
    PostListComponent, 
    NewPostComponent, 
    PostByUserComponent,
    UsersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
