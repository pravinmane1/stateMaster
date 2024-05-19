import { Component, OnInit } from '@angular/core';
import { State } from '../store/state.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../store/post/post.state';
import { postSelector } from '../store/post/post.selectors';
import { clear, deletePost } from '../store/post/post.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  public posts$!: Observable<Post[]>;
  constructor(private store: Store<State>) {}
  ngOnInit(): void {
    console.log('inside posts');

    this.posts$ = this.store.select(postSelector);
  }
  onPostDelete(id: number) {
    this.store.dispatch(deletePost({ id }));
  }
  onAllClear() {
    this.store.dispatch(clear());
  }
}
