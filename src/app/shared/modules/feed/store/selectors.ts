import { createFeatureSelector, createSelector } from '@ngrx/store';

import { type FeedStateModel } from '../models/feedState.model';
import { StoreSlices } from 'src/app/shared/store/slices';

const selectFeedFeature = createFeatureSelector<FeedStateModel>(
  StoreSlices.FEED
);

export const isLoadingSelector = createSelector(
  selectFeedFeature,
  (feedState) => feedState.isLoading
);

export const errorSelector = createSelector(
  selectFeedFeature,
  (feedState) => feedState.error
);

export const feedSelector = createSelector(
  selectFeedFeature,
  (feedState) => feedState.data
);
