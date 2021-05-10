import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [UserListComponent, UsersComponent],
  imports: [CommonModule],
})
export class ListModule {}
