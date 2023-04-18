import { Component, Input, type OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { type Observable } from 'rxjs';

import { type AuthStateModel } from 'src/app/auth/models/authState.model';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';
import { HttpLinks } from 'src/app/shared/common/httpLinks';

@Component({
  selector: 'ma-feed-toggler',
  templateUrl: './feedToggler.component.html',
  styleUrls: ['./feedToggler.component.scss'],
})
export class FeedTogglerComponent implements OnInit {
  HttpLinks = HttpLinks;
  isLoggedIn$: Observable<AuthStateModel['isLoggedIn']>;

  @Input('tagName') tagNameProps: string;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initializeValues();
  }

  private initializeValues() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}
