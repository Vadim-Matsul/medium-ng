import { Component, Input, type OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter, firstValueFrom, map } from 'rxjs';

import { addFollowActions } from '../../store/actions/addToFavorite.actions';
import { checkToLoggedInAction } from 'src/app/auth/store/actions/sync.actions';
import { isAnonymousSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'ma-follow-button',
  templateUrl: './followButton.component.html',
  styleUrls: ['./followButton.component.scss'],
})
/**
 * The Concept of Optimistic Updates
 */
export class FollowButtonComponent implements OnInit {
  #isAnonymous: boolean;
  @Input('username') usernameProps: string;

  isFollowing: boolean;
  @Input('isFollowing') set _followingSetter(v: boolean) {
    this.isFollowing = v;
  }

  constructor(private store: Store) {}

  ngOnInit() {
    this.initializeValues();
  }

  private async initializeValues() {
    const CLOSE_STREAM = false;

    await firstValueFrom(
      this.store
        .pipe(
          select(isAnonymousSelector),
          map((authStatus) => {
            this.#isAnonymous = authStatus;
          })
        )
        .pipe(filter(() => CLOSE_STREAM))
    );
  }

  onFollow() {
    if (this.#isAnonymous) {
      return this.store.dispatch(checkToLoggedInAction({ isAnonymous: true }));
    }

    this.store.dispatch(addFollowActions({ slug: this.usernameProps, isFollow: this.isFollowing }));

    /** Optimistic Updates */
    this.isFollowing = !this.isFollowing;
  }
}
