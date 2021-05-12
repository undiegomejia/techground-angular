import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPostComponent } from './new-post.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewPostComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class NewPostModule {}
