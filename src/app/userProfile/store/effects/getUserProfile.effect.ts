import { Injectable } from '@angular/core';
import { type HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { UserProfileService } from '../../services/userProfile.service';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from '../actions/getUserProfile.actions';
import { backendErrorsResponseModelSchema } from 'src/app/shared/models/backendErrors.model';

@Injectable()
export class GetUserProfileEffect {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUserProfileAction),
      exhaustMap(({ userSlug }) => {
        return this.userProfileService.getUserProfile(userSlug).pipe(
          map((userProfile) => {
            return getUserProfileSuccessAction({ userProfile });
          }),
          catchError((_error: HttpErrorResponse) => {
            const errors = backendErrorsResponseModelSchema.parse(_error.error);
            return of(getUserProfileFailureAction(errors));
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private userProfileService: UserProfileService) {}
}
