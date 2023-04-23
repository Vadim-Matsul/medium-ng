import { createAction, props } from '@ngrx/store';

import { AuthorModel } from 'src/app/shared/models/author.model';
import { type BackendErrorsModel } from 'src/app/shared/models/backendErrors.model';
import { ActionTypes } from '../actionTypes';

export const getUserProfileAction = createAction(
  ActionTypes.GET_USER_PROFILE,
  props<{ userSlug: string }>()
);

export const getUserProfileSuccessAction = createAction(
  ActionTypes.GET_USER_PROFILE_SUCCESS,
  props<{ userProfile: AuthorModel }>()
);

export const getUserProfileFailureAction = createAction(
  ActionTypes.GET_USER_PROFILE_FAILURE,
  props<{ errors: BackendErrorsModel }>()
);
