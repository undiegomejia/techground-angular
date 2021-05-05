import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user-list',
    loadChildren: () =>
      import('./pages/users/user-list/user-list.module').then((m) => m.ListModule),
  },
  {
    path: 'post-list',
    loadChildren: () =>
      import('./pages/posts/post-list/post-list.module').then(
        (m) => m.PostListModule
      ),
  },
  {
    path: 'new-post',
    loadChildren: () =>
      import('./pages/posts/new-post/new-post.module').then(
        (m) => m.NewPostModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
