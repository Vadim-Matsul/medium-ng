import { createAction, props } from '@ngrx/store';

import { type CurrentUserModel } from 'src/app/shared/models/currentUser.model';
import { ActionTypes } from '../actionTypes';

export const fetchUserAction = createAction(ActionTypes.FETCH_USER_BY_TOKEN);

export const fetchUserSuccessAction = createAction(
  ActionTypes.FETCH_USER_BY_TOKEN_SUCCESS,
  props<{ currentUser: CurrentUserModel }>()
);

export const fetchUserFailureAction = createAction(
  ActionTypes.FETCH_USER_BY_TOKEN_FAILURE
);
