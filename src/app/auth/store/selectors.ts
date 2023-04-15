import { createFeatureSelector, createSelector } from '@ngrx/store';

import { type AuthStateModel } from '../models/authState.model';
import { StoreSlices } from 'src/app/shared/store/slices';

const selectAuthFeature = createFeatureSelector<AuthStateModel>(
  StoreSlices.AUTH
);

export const authFeatureSelector = createSelector(
  selectAuthFeature,
  (authState) => authState
);

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState) => authState.isSubmitting
);

export const errorMessagesSelector = createSelector(
  authFeatureSelector,
  (authState) => authState.validationErrors
);

export const isLoggedInSelector = createSelector(
  selectAuthFeature,
  (authState) => authState.isLoggedIn === true
);

export const isAnonymousSelector = createSelector(
  selectAuthFeature,
  (authState) => authState.isLoggedIn === false
);

export const currentUserSelector = createSelector(
  selectAuthFeature,
  (authState) => authState.currentUser
);
