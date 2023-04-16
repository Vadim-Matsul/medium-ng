import { createAction, props } from '@ngrx/store';

import { type FeedResponseModel } from '../../models/feedHttp.model';
import { ActionTypes } from '../actionTypes';

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{ shortUrl: string }>()
);

export const getFeedSuccessAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{ feed: FeedResponseModel }>()
);

export const getFeedFailureAction = createAction(
  ActionTypes.GET_FEED_FAILURE
  // TODO: handle errors props
);
