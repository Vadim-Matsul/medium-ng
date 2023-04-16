import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { PersistentService } from 'src/app/shared/services/persistent.service';
import {
  fetchUserAction,
  fetchUserFailureAction,
  fetchUserSuccessAction,
} from '../actions/fetchUser.actions';
import { currentUserModelSchema } from 'src/app/shared/models/currentUser.model';
import { StorageKeys } from 'src/app/shared/common/storage';

@Injectable()
export class FetchUserEffect {
  fetchUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchUserAction),
      exhaustMap(() => {
        const token = this.persistentService.get<string>(StorageKeys.Token);
        if (!token) {
          return of(fetchUserFailureAction());
        }

        return this.authService.fetchUserByToken().pipe(
          map((_currentUser) => {
            const currentUser = currentUserModelSchema.parse(_currentUser);
            return fetchUserSuccessAction({ currentUser });
          }),
          catchError((_errors) => {
            return of(fetchUserFailureAction());
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistentService: PersistentService
  ) {}
}
