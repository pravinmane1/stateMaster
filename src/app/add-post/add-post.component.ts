import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { State } from '../store/state.interface';
import { create } from '../store/post/post.actions';
import { Store } from '@ngrx/store';
import { Post } from '../store/post/post.state';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.scss',
})
export class AddPostComponent implements OnInit {
  postData!: FormGroup;

  constructor(private store: Store<State>) {}
  ngOnInit(): void {
    this.postData = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }
  addPost() {
    if (!this.postData.valid) {
      return;
    }

    const post: Omit<Post, 'id'> = {
      title: this.postData.value.title,
      description: this.postData.value.description,
    };
    this.store.dispatch(create(post));
  }

  public getErrorMessage(name: string) {
    debugger;
    if (this.postData.get(name)?.errors?.['required']) {
      return name + ' is required';
    }
    if (this.postData.get(name)?.errors?.['minlength']) {
      return 'minimum characters not filled';
    }
    return '';
  }
}
