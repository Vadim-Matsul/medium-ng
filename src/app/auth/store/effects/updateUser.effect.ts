import { Injectable } from '@angular/core';
import { type HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { PersistentService } from 'src/app/shared/services/persistent.service';
import {
  updateUserAction,
  updateUserFailureAction,
  updateUserSuccessAction,
} from '../actions/updateUser.actions';
import { backendErrorsResponseModelSchema } from 'src/app/shared/models/backendErrors.model';
import { HttpLinks } from 'src/app/shared/common/httpLinks';
import { StorageKeys } from 'src/app/shared/common/storage';

@Injectable()
export class UpdateUserEffect {
  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateUserAction),
      exhaustMap(({ request }) => {
        return this.authService.updateUserData(request).pipe(
          map((currentUser) => {
            return updateUserSuccessAction({ currentUser });
          }),
          catchError((_errors: HttpErrorResponse) => {
            const errors = backendErrorsResponseModelSchema.parse(_errors.error);
            return of(updateUserFailureAction(errors));
          })
        );
      })
    );
  });

  updateTokenAfterChanges$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(updateUserSuccessAction),
        tap(({ currentUser: { username, token } }) => {
          this.persistentService.set(StorageKeys.Token, token);
          this.router.navigateByUrl(`/${HttpLinks.Profiles}/${username}`);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private persistentService: PersistentService
  ) {}
}
