import { createAction, props } from '@ngrx/store';

import { type RegisterRequestModel } from '../../models/register/registerHttp.model';
import { type BackendErrorsModel } from 'src/app/shared/models/backendErrors.model';
import { type CurrentUserModel } from 'src/app/shared/models/currentUser.model';
import { ActionTypes } from '../actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestModel }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserModel }>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsModel }>()
);
