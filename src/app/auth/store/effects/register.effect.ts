import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { AuthService } from './../../services/auth.service';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      exhaustMap(({ request }) =>
        this.authService.register(request).pipe(
          map((currentUser) => registerSuccessAction({ currentUser })),
          catchError(() => of(registerFailureAction()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
