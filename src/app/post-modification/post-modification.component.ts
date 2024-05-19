import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/state.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { selectPostById } from '../store/post/post.selectors';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../store/post/post.state';
import { update } from '../store/post/post.actions';

@Component({
  selector: 'app-post-modification',
  templateUrl: './post-modification.component.html',
  styleUrl: './post-modification.component.scss',
})
export class PostModificationComponent implements OnInit {
  public postData!: FormGroup;
  private post!: Post;
  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const postId = paramMap.get('id');
      this.store.select(selectPostById({ id: +postId! })).subscribe((post) => {
        this.post = post as Post;
        this.createForm();
      });
    });
  }

  private createForm() {
    this.postData = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(4),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  public updatePost() {
    if (!this.postData.valid) {
      return;
    }
    const updatedPost: Post = {
      id: this.post.id,
      title: this.postData.value.title,
      description: this.postData.value.description,
    };
    this.store.dispatch(update(updatedPost));
    this.router.navigate(['posts']);
  }

  public getErrorMessage(key: string) {}
}
