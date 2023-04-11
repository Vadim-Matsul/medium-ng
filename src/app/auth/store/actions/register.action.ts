import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';
import { type AuthRequestModel } from '../../models/authHttp.model';
import { type CurrentUserModel } from 'src/app/shared/models/currentUser.model';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: AuthRequestModel }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserModel }>()
);

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE);
