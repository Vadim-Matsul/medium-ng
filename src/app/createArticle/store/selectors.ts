import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CreateArticleStateModel } from '../models/createArticleState.model';
import { StoreSlices } from 'src/app/shared/store/slices';

const selectCreateArticleFeature = createFeatureSelector<CreateArticleStateModel>(
  StoreSlices.ARTICLE_FORM
);

export const isSubmittingSelector = createSelector(
  selectCreateArticleFeature,
  (createArticleState) => createArticleState.isSubmitting
);

export const errorMessagesSelector = createSelector(
  selectCreateArticleFeature,
  (createArticleState) => createArticleState.validationErrors
);
