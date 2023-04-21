import { createAction, props } from '@ngrx/store';

import { type FeedModel } from 'src/app/shared/models/posts/feed.model';
import { ActionTypes } from '../actionTypes';

export const getArticleAction = createAction(ActionTypes.GET_ARTICLE, props<{ slug: string }>());

export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: FeedModel }>()
);

export const getArticleFailureAction = createAction(ActionTypes.GET_ARTICLE_FAILURE);
