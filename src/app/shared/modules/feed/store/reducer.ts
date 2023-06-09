import { routerNavigationAction } from '@ngrx/router-store';
import { createReducer, on, type Action } from '@ngrx/store';
import produce from 'immer';

import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions/getFeed.actions';
import { type FeedStateModel } from '../models/feedState.model';

const initialState: FeedStateModel = {
  isLoading: false,
  error: null,
  data: null,
};

const feedReducer = createReducer<FeedStateModel>(
  initialState,
  /** GET FEED */
  on(getFeedAction, (state) =>
    produce(state, (draft) => {
      draft.isLoading = true;
    })
  ),
  on(getFeedSuccessAction, (state, { feed }) =>
    produce(state, (draft) => {
      draft.isLoading = false;
      draft.data = feed;
    })
  ),
  on(getFeedFailureAction, (state) =>
    produce(state, (draft) => {
      draft.isLoading = false;
      draft.error = 'some error';
    })
  ),
  /** @ngrx/router-store */
  on(routerNavigationAction, () => initialState)
);

export function reducers(state: FeedStateModel, action: Action) {
  return feedReducer(state, action);
}
