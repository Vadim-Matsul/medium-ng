import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

import { checkToLoggedInAction } from '../actions/sync.actions';
import { HttpLinks } from 'src/app/shared/common/httpLinks';

@Injectable()
export class CheckToLoggedInEffect {
  redirectIfAnonymous$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(checkToLoggedInAction),
        tap(({ isAnonymous }) => {
          if (!isAnonymous) return;

          this.router.navigateByUrl(HttpLinks.Login);
        })
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
