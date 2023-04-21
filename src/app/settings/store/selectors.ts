import { createFeatureSelector, createSelector } from '@ngrx/store';

import { type SettingsStateModel } from '../models/settingsState.model';
import { StoreSlices } from 'src/app/shared/store/slices';

const selectSettingsFeature = createFeatureSelector<SettingsStateModel>(
  StoreSlices.PROFILE_SETTINGS
);

export const isSubmittingSelector = createSelector(
  selectSettingsFeature,
  (settingsState) => settingsState.isSubmitting
);

export const errorMessagesSelector = createSelector(
  selectSettingsFeature,
  (settingsState) => settingsState.validationErrors
);
