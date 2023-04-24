import { createAction, props } from '@ngrx/store';

import { type PopularTagsModel } from 'src/app/shared/models/popularTag.model';
import { ActionTypes } from '../actionTypes';

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS);

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ popularTags: PopularTagsModel }>()
);

export const getPopularTagsFailureAction = createAction(ActionTypes.GET_POPULAR_TAGS_FAILURE);
