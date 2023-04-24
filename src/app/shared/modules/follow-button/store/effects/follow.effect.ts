import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { FollowButtonService } from '../../services/followButton.service';
import {
  addFollowActions,
  addFollowFailureActions,
  addFollowSuccessActions,
} from '../actions/addToFavorite.actions';
import { authorModelSchema } from 'src/app/shared/models/author.model';
import { feedModelSchema } from 'src/app/shared/models/posts/feed.model';

@Injectable()
export class FollowEffect {
  follow$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addFollowActions),
      exhaustMap(({ slug, isFollow }) => {
        const method$ = isFollow
          ? this.followButtonService.removeFollow(slug)
          : this.followButtonService.addFollow(slug);

        return method$.pipe(
          map((_profile) => {
            const profile = authorModelSchema.parse(_profile);
            return addFollowSuccessActions({ profile });
          }),
          catchError(() => {
            return of(addFollowFailureActions());
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private followButtonService: FollowButtonService) {}
}
