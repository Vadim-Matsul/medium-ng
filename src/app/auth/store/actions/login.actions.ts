import { createAction, props } from '@ngrx/store';

import { type LoginRequestModel } from '../../models/login/loginHttp.model';
import { type BackendErrorsModel } from 'src/app/shared/models/backendErrors.model';
import { type CurrentUserModel } from 'src/app/shared/models/currentUser.model';
import { ActionTypes } from '../actionTypes';

export const loginAction = createAction(ActionTypes.LOGIN, props<{ request: LoginRequestModel }>());

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserModel }>()
);

export const loginFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsModel }>()
);
