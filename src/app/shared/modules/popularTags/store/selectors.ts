import { createFeatureSelector, createSelector } from '@ngrx/store';

import { type PopularTagsStateModel } from '../models/popularTagsState.model';
import { StoreSlices } from 'src/app/shared/store/slices';

const selectPopularTagsFeature = createFeatureSelector<PopularTagsStateModel>(
  StoreSlices.POPULAR_TAGS
);

export const popularTagsSelector = createSelector(
  selectPopularTagsFeature,
  (popularTagsState) => popularTagsState.data
);

export const isLoadingSelector = createSelector(
  selectPopularTagsFeature,
  (popularTagsState) => popularTagsState.isLoading
);

export const errorMessageSelector = createSelector(
  selectPopularTagsFeature,
  (popularTagsState) => popularTagsState.error
);
