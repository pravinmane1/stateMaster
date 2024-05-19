import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { CommonModule } from '@angular/common';
import { PostModificationComponent } from '../post-modification/post-modification.component';
import { AddPostComponent } from '../add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { counterReducer } from '../store/counter/counter.reducer';
import { StoreModule } from '@ngrx/store';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      { path: 'edit/:id', component: PostModificationComponent },
      { path: 'add', component: AddPostComponent },
    ],
  },
];
@NgModule({
  declarations: [PostsComponent, PostModificationComponent, AddPostComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('counter', counterReducer),
  ],
})
export class PostsModule {}
