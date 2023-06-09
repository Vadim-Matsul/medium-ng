import { createReducer, on, type Action } from '@ngrx/store';
import produce from 'immer';

import {
  fetchUserAction,
  fetchUserFailureAction,
  fetchUserSuccessAction,
} from './actions/fetchUser.actions';
import { loginAction, loginFailureAction, loginSuccessAction } from './actions/login.actions';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.actions';
import { logoutUserAction } from './actions/sync.actions';
import { updateUserSuccessAction } from './actions/updateUser.actions';
import { type AuthStateModel } from '../models/authState.model';

const initialState: AuthStateModel = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

const authReducer = createReducer<AuthStateModel>(
  initialState,
  /** --- REGISTER --- */
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
  ),
  /** --- LOGIN --- */
  on(loginAction, (state) =>
    produce(state, (draft) => {
      draft.isSubmitting = true;
      draft.validationErrors = null;
    })
  ),
  on(loginSuccessAction, (state, { currentUser }) =>
    produce(state, (draft) => {
      draft.isLoggedIn = true;
      draft.isSubmitting = false;
      draft.currentUser = currentUser;
    })
  ),
  on(loginFailureAction, (state, { errors }) =>
    produce(state, (draft) => {
      draft.isSubmitting = false;
      draft.validationErrors = errors;
    })
  ),
  /** --- FETCH USER --- */
  on(fetchUserAction, (state) =>
    produce(state, (draft) => {
      draft.isLoading = true;
    })
  ),
  on(fetchUserSuccessAction, (state, { currentUser }) =>
    produce(state, (draft) => {
      draft.isLoading = false;
      draft.isLoggedIn = true;
      draft.currentUser = currentUser;
    })
  ),
  on(fetchUserFailureAction, (state) =>
    produce(state, (draft) => {
      draft.isLoading = false;
      draft.isLoggedIn = false;
      draft.currentUser = null;
    })
  ),
  /** ---
   * UPDATE USER
   *  + contain only business-logic
   * --- */
  on(updateUserSuccessAction, (state, { currentUser }) =>
    produce(state, (draft) => {
      draft.currentUser = currentUser;
    })
  ),
  /** --- LOGOUT --- */
  on(logoutUserAction, () =>
    produce(initialState, (draft) => {
      draft.isLoggedIn = false;
    })
  )
);

export function reducers(state: AuthStateModel, action: Action) {
  return authReducer(state, action);
}
