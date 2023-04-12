import { createFeatureSelector, createSelector } from '@ngrx/store';

import { type AuthStateModel } from '../models/authState.model';
import { StoreSlices } from 'src/app/shared/store/slices';

const selectAuthFeature = createFeatureSelector<AuthStateModel>(
  StoreSlices.AUTH
);

export const authFeatureSelector = createSelector(
  selectAuthFeature,
  (authState: AuthStateModel) => authState
);

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateModel) => authState.isSubmitting
);

export const errorMessagesSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateModel) => authState.validationErrors
);
