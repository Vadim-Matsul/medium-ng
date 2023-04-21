import { createAction, props } from '@ngrx/store';

import { type UpdateUserRequestModel } from '../../models/update/registerHttp.model';
import { type BackendErrorsModel } from 'src/app/shared/models/backendErrors.model';
import { type CurrentUserModel } from 'src/app/shared/models/currentUser.model';
import { ActionTypes } from '../actionTypes';

export const updateUserAction = createAction(
  ActionTypes.UPDATE_USER,
  props<{ request: UpdateUserRequestModel }>()
);

export const updateUserSuccessAction = createAction(
  ActionTypes.UPDATE_USER_SUCCESS,
  props<{ currentUser: CurrentUserModel }>()
);

export const updateUserFailureAction = createAction(
  ActionTypes.UPDATE_USER_FAILURE,
  props<{ errors: BackendErrorsModel }>()
);
