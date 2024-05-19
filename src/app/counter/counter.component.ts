import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { counterSelector } from '../store/counter/counter.selectors';
import { decrement, increment, reset } from '../store/counter/counter.actions';
import { State } from '../store/state.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnInit {
  public count!: Observable<number>;

  constructor(private store: Store<State>) {}
  ngOnInit(): void {
    this.count = this.store.select(counterSelector);
  }

  public incrementCount() {
    this.store.dispatch(increment({ incrementBy: 1 }));
  }
  public decrementCount() {
    this.store.dispatch(decrement({ decrementBy: 1 }));
  }
  public resetCount() {
    this.store.dispatch(reset());
  }
}
