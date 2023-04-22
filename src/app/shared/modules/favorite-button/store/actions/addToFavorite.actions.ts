import { createAction, props } from '@ngrx/store';

import { type FeedModel } from 'src/app/shared/models/posts/feed.model';
import { ActionTypes } from '../actionTypes';

export const addToFavoriteActions = createAction(
  ActionTypes.ADD_TO_FAVORITE,
  props<{ slug: string; isFavorited: boolean }>()
);

export const addToFavoriteSuccessActions = createAction(
  ActionTypes.ADD_TO_FAVORITE_SUCCESS,
  props<{ article: FeedModel }>()
);

export const addToFavoriteFailureActions = createAction(ActionTypes.ADD_TO_FAVORITE_FAILURE);
