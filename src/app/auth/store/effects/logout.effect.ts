import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

import { PersistentService } from 'src/app/shared/services/persistent.service';
import { logoutUserAction } from '../actions/sync.actions';
import { HttpLinks } from 'src/app/shared/common/httpLinks';
import { StorageKeys } from 'src/app/shared/common/storage';

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutUserAction),
        tap(() => {
          this.persistentService.remove(StorageKeys.Token);
          this.router.navigateByUrl(HttpLinks.Home);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private persistentService: PersistentService,
    private router: Router
  ) {}
}
