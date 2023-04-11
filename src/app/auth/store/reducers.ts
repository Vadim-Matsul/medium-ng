import { createReducer, on, type Action } from '@ngrx/store';
import produce from 'immer';

import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action';
import { type AuthStateModel } from '../models/authState.model';

const initialState: AuthStateModel = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

const authReducer = createReducer<AuthStateModel>(
  initialState,
  on(registerAction, (state) =>
    produce(state, (draft) => {
      draft.isSubmitting = true;
      draft.validationErrors = null;
    })
  ),
  on(registerSuccessAction, (state, { currentUser }) =>
    produce(state, (draft) => {
      draft.isLoggedIn = true;
      draft.isSubmitting = false;
      draft.currentUser = currentUser;
    })
  ),
  on(registerFailureAction, (state, { errors }) =>
    produce(state, (draft) => {
      draft.isSubmitting = false;
      draft.validationErrors = errors;
    })
  )
);

export function reducers(state: AuthStateModel, action: Action) {
  return authReducer(state, action);
}
