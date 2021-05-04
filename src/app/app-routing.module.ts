import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'details',
    loadChildren: () =>
      import('./pages/users/details/details.module').then(
        (m) => m.DetailsModule
      ),
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./pages/users/edit/edit.module').then((m) => m.EditModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/users/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./pages/users/new/new.module').then((m) => m.NewModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
