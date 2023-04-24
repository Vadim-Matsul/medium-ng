import { createAction, props } from '@ngrx/store';

import { type AuthorModel } from 'src/app/shared/models/author.model';
import { ActionTypes } from '../actionTypes';

export const addFollowActions = createAction(
  ActionTypes.ADD_FOLLOW,
  props<{ slug: string; isFollow: boolean }>()
);

export const addFollowSuccessActions = createAction(
  ActionTypes.ADD_FOLLOW_SUCCESS,
  props<{ profile: AuthorModel }>()
);

export const addFollowFailureActions = createAction(ActionTypes.ADD_FOLLOW_FAILURE);
