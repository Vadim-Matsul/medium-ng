import { Component, Input, type OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter, firstValueFrom, map } from 'rxjs';

import { addToFavoriteActions } from '../../store/actions/addToFavorite.actions';
import { checkToLoggedInAction } from 'src/app/auth/store/actions/sync.actions';
import { isAnonymousSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'ma-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss'],
})
/**
 * The Concept of Optimistic Updates
 */
export class FavoriteButtonComponent implements OnInit {
  #isAnonymous: boolean;
  @Input('articleSlug') articleSlugProps: string;
  favoritesCount: number;
  @Input('favoritesCount') set _favoritesCountSetter(v: number) {
    this.favoritesCount = v;
  }
  isFavorited: boolean;
  @Input('isFavorited') set _isFavoritedSetter(v: boolean) {
    this.isFavorited = v;
  }

  constructor(private store: Store) {}

  ngOnInit() {
    this.initializeValues();
  }

  private async initializeValues() {
    await firstValueFrom(
      this.store.pipe(
        select(isAnonymousSelector),
        map((authStatus) => {
          this.#isAnonymous = authStatus;
        }),
        filter(() => false)
      )
    );
  }

  onLike() {
    if (this.#isAnonymous) {
      return this.store.dispatch(checkToLoggedInAction({ isAnonymous: true }));
    }

    this.store.dispatch(
      addToFavoriteActions({ slug: this.articleSlugProps, isFavorited: this.isFavorited })
    );

    /** Optimistic Updates */
    this.isFavorited ? --this.favoritesCount : ++this.favoritesCount;
    this.isFavorited = !this.isFavorited;
  }
}
