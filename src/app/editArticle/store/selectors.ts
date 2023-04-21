import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EditArticleStateModel } from '../models/editArticleState.model';
import { StoreSlices } from 'src/app/shared/store/slices';

const selectEditArticleFeature = createFeatureSelector<EditArticleStateModel>(
  StoreSlices.ARTICLE_EDIT
);

export const isLoadingSelector = createSelector(
  selectEditArticleFeature,
  (editArticleState) => editArticleState.isLoading
);

export const articleSelector = createSelector(
  selectEditArticleFeature,
  (editArticleState) => editArticleState.article
);

export const isSubmittingSelector = createSelector(
  selectEditArticleFeature,
  (editArticleState) => editArticleState.isSubmitting
);

export const errorMessagesSelector = createSelector(
  selectEditArticleFeature,
  (editArticleState) => editArticleState.validationErrors
);
