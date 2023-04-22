import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';

export const logoutUserAction = createAction(ActionTypes.LOGOUT_USER);

export const checkToLoggedInAction = createAction(
  ActionTypes.CHECK_TO_LOGGED_IN,
  props<{ isAnonymous: boolean }>()
);
