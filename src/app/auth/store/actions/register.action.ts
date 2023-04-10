import { createAction, props } from '@ngrx/store';

import { type RegisterFormData } from '../../components/register/register.model';
import { ActionTypes } from '../actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterFormData>()
);
