import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './StateManagement/State/mainState';
import { INCREMENT } from './StateManagement/actions/actioncreator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  data = '';
  constructor(private store: Store<State>) {
    console.log('We have a store! ' + store);
     store.select(s=>s)
      .subscribe((data: State) => {
        this.data = 'data is ' + data.counter;
      });
    this.store.dispatch({ type: INCREMENT, payload: { innerObj: { text: 'derp!' } } });
  }
}
