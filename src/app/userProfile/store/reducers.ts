import { createFeature, createReducer, on } from '@ngrx/store';
import produce from 'immer';

import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from './actions/getUserProfile.actions';
import { type UserProfileStateModel } from '../models/userProfileState.model';
import { StoreSlices } from 'src/app/shared/store/slices';

const initialState: UserProfileStateModel = {
  isLoading: false,
  profile: null,
  validationErrors: null,
};

const userProfileReducer = createReducer<UserProfileStateModel>(
  initialState,
  /** --- GET USER PROFILE --- */
  on(getUserProfileAction, (state) =>
    produce(state, (draft) => {
      draft.isLoading = true;
      draft.validationErrors = null;
    })
  ),
  on(getUserProfileSuccessAction, (state, { userProfile }) =>
    produce(state, (draft) => {
      draft.isLoading = false;
      draft.profile = userProfile;
    })
  ),
  on(getUserProfileFailureAction, (state, { errors }) =>
    produce(state, (draft) => {
      draft.isLoading = false;
      draft.validationErrors = errors;
    })
  )
);

export const userProfileFeature = createFeature({
  name: StoreSlices.USER_PROFILE,
  reducer: userProfileReducer,
});
