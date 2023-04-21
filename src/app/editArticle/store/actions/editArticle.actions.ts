import { createAction, props } from '@ngrx/store';

import { type BackendErrorsModel } from 'src/app/shared/models/backendErrors.model';
import { type ArticleFormModel, type FeedModel } from 'src/app/shared/models/posts/feed.model';
import { ActionTypes } from '../actionTypes';

export const editArticleAction = createAction(
  ActionTypes.EDIT_ARTICLE,
  props<{ articleFormData: ArticleFormModel; slug: string }>()
);

export const editArticleSuccessAction = createAction(
  ActionTypes.EDIT_ARTICLE_SUCCESS,
  props<{ article: FeedModel }>()
);

export const editArticleFailureAction = createAction(
  ActionTypes.EDIT_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsModel }>()
);
