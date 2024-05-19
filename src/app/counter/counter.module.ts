import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { postReducer } from '../store/post/post.reducer';

const routes: Routes = [{ path: '', component: CounterComponent }];
@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('post', postReducer),
  ],
})
export class CounterModule {}
