import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';
import { type RegisterFormModel } from '../../models/register.model';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterFormModel>()
);
