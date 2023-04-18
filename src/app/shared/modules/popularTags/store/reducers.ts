import { createReducer, on, type Action } from '@ngrx/store';
import produce from 'immer';

import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './actions/getPopularTags.actions';
import { type PopularTagsStateModel } from '../models/popularTagsState.model';

const initialState: PopularTagsStateModel = {
  isLoading: false,
  error: null,
  data: null,
};

const popularTagsReducer = createReducer<PopularTagsStateModel>(
  initialState,
  on(getPopularTagsAction, (state) =>
    produce(state, (draft) => {
      draft.isLoading = true;
    })
  ),
  on(getPopularTagsSuccessAction, (state, { popularTags }) =>
    produce(state, (draft) => {
      draft.isLoading = false;
      draft.data = popularTags;
    })
  ),
  on(getPopularTagsFailureAction, (state) =>
    produce(state, (draft) => {
      draft.isLoading = false;
      // TODO: handle real error message
      draft.error = 'some error';
    })
  )
);

export function reducers(state: PopularTagsStateModel, action: Action) {
  return popularTagsReducer(state, action);
}
