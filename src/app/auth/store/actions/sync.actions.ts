import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';

export const logoutUserAction = createAction(ActionTypes.LOGOUT_USER);
