import { createAction, props } from '@ngrx/store';

import { type BackendErrorsModel } from 'src/app/shared/models/backendErrors.model';
import { type ArticleFormModel, type FeedModel } from 'src/app/shared/models/posts/feed.model';
import { ActionTypes } from '../actionTypes';

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleFormData: ArticleFormModel }>()
);

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: FeedModel }>()
);

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsModel }>()
);
