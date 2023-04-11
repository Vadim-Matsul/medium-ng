import { createReducer, on, type Action } from '@ngrx/store';
import produce from 'immer';

import { registerAction } from './actions/register.action';
import { type AuthStateModel } from '../models/authState.model';

const initialState: AuthStateModel = {
  isSubmitting: false,
};

const authReducer = createReducer<AuthStateModel>(
  initialState,
  on(registerAction, (state) =>
    produce(state, (draft) => {
      draft.isSubmitting = true;
    })
  )
);

export function reducers(state: AuthStateModel, action: Action) {
  return authReducer(state, action);
}
