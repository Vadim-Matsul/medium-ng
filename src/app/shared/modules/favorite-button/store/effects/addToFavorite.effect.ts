import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { FavoritesService } from '../../services/favorites.service';
import {
  addToFavoriteActions,
  addToFavoriteFailureActions,
  addToFavoriteSuccessActions,
} from '../actions/addToFavorite.actions';
import { feedModelSchema } from 'src/app/shared/models/posts/feed.model';

@Injectable()
export class AddToFavoriteEffect {
  updateFavoriteStatus$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addToFavoriteActions),
      exhaustMap(({ slug, isFavorited }) => {
        const method$ = isFavorited
          ? this.favoritesService.removeFromFavorites(slug)
          : this.favoritesService.addToFavorites(slug);

        return method$.pipe(
          map((_article) => {
            const article = feedModelSchema.parse(_article);
            return addToFavoriteSuccessActions({ article });
          }),
          catchError(() => {
            return of(addToFavoriteFailureActions());
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store,
    private favoritesService: FavoritesService
  ) {}
}
