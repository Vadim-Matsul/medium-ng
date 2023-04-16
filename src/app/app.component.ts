import { Component, type OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { fetchUserAction } from './auth/store/actions/fetchUser.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(fetchUserAction());
  }
}
