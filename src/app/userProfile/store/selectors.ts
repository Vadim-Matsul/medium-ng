import { createFeatureSelector, createSelector } from '@ngrx/store';

import { type UserProfileStateModel } from '../models/userProfileState.model';
import { StoreSlices } from 'src/app/shared/store/slices';

const selectUserProfileFeature = createFeatureSelector<UserProfileStateModel>(
  StoreSlices.USER_PROFILE
);

export const isLoadingSelector = createSelector(
  selectUserProfileFeature,
  (userProfileState) => userProfileState.isLoading
);

export const errorMessagesSelector = createSelector(
  selectUserProfileFeature,
  (userProfileState) => userProfileState.validationErrors
);

export const profileSelector = createSelector(
  selectUserProfileFeature,
  (userProfileState) => userProfileState.profile
);
