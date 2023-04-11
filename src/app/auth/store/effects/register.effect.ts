import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { AuthService } from './../../services/auth.service';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';
import { authBackendErrorsModelSchema } from '../../models/authHttp.model';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerAction),
      exhaustMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser) => {
            return registerSuccessAction({ currentUser });
          }),
          catchError((_errors: HttpErrorResponse) => {
            const errors = authBackendErrorsModelSchema.parse(_errors.error);
            return of(registerFailureAction(errors));
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
