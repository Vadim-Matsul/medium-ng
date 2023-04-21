import { createFeature, createReducer, on } from '@ngrx/store';
import produce from 'immer';

import {
  updateUserAction,
  updateUserFailureAction,
  updateUserSuccessAction,
} from 'src/app/auth/store/actions/updateUser.actions';
import { type SettingsStateModel } from '../models/settingsState.model';
import { StoreSlices } from 'src/app/shared/store/slices';

const initialState: SettingsStateModel = {
  isSubmitting: false,
  validationErrors: null,
};

const settingsReducer = createReducer<SettingsStateModel>(
  initialState,
  /** ---
   * updateUser from AUTH module
   *  + only UI logic
   * --- */
  on(updateUserAction, (state) =>
    produce(state, (draft) => {
      draft.isSubmitting = true;
      draft.validationErrors = null;
    })
  ),
  on(updateUserSuccessAction, (state) =>
    produce(state, (draft) => {
      draft.isSubmitting = false;
    })
  ),
  on(updateUserFailureAction, (state, { errors }) =>
    produce(state, (draft) => {
      draft.isSubmitting = false;
      draft.validationErrors = errors;
    })
  )
);

export const settingsFeature = createFeature<StoreSlices, SettingsStateModel>({
  name: StoreSlices.PROFILE_SETTINGS,
  reducer: settingsReducer,
});
