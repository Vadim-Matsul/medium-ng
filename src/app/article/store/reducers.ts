import { routerNavigatedAction } from '@ngrx/router-store';
import { createFeature, createReducer, on } from '@ngrx/store';
import produce from 'immer';

import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/getArticle.actions';
import { type ArticleStateModel } from '../models/articleState.model';
import { StoreSlices } from 'src/app/shared/store/slices';

const initialState: ArticleStateModel = {
  isLoading: false,
  error: null,
  data: null,
};

const articleReducer = createReducer<ArticleStateModel>(
  initialState,
  on(getArticleAction, (state) =>
    produce(state, (draft) => {
      draft.isLoading = true;
    })
  ),
  on(getArticleSuccessAction, (state, { article }) =>
    produce(state, (draft) => {
      draft.isLoading = false;
      draft.data = article;
    })
  ),
  on(getArticleFailureAction, (state) =>
    produce(state, (draft) => {
      draft.isLoading = false;
      // TODO: handle real error
      draft.error = 'some error';
    })
  ),
  /** @ngrx/router-store */
  on(routerNavigatedAction, () => initialState)
);

export const articleFeature = createFeature<
  StoreSlices.ARTICLE,
  ArticleStateModel
>({
  name: StoreSlices.ARTICLE,
  reducer: articleReducer,
});
