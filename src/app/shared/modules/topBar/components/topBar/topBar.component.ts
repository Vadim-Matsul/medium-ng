import { Component, type OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { type Observable } from 'rxjs';

import { CurrentUserModel } from 'src/app/shared/models/currentUser.model';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from 'src/app/auth/store/selectors';
import { HttpLinks } from 'src/app/shared/common/httpLinks';

@Component({
  selector: 'ma-topBar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent implements OnInit {
  brand = 'Medium';
  HttpLinks = HttpLinks;

  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<CurrentUserModel | null>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initializeValues();
  }

  private initializeValues() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
