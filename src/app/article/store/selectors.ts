import { createFeatureSelector, createSelector } from '@ngrx/store';

import { type ArticleStateModel } from '../models/articleState.model';
import { articleFeature } from './reducers';

const selectArticleFeature = createFeatureSelector<ArticleStateModel>(
  articleFeature.name
);

export const isLoadingSelector = createSelector(
  selectArticleFeature,
  (articleState) => articleState.isLoading
);

export const errorMessageSelector = createSelector(
  selectArticleFeature,
  (articleState) => articleState.error
);

export const articleSelector = createSelector(
  selectArticleFeature,
  (articleState) => articleState.data
);
