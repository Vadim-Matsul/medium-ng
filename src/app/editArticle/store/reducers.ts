import { createFeature, createReducer, on } from '@ngrx/store';
import produce from 'immer';

import {
  editArticleAction,
  editArticleFailureAction,
  editArticleSuccessAction,
} from './actions/editArticle.actions';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/getArticle.actions';
import { type EditArticleStateModel } from '../models/editArticleState.model';
import { StoreSlices } from 'src/app/shared/store/slices';

const initialState: EditArticleStateModel = {
  isLoading: false,
  article: null,
  isSubmitting: false,
  validationErrors: null,
};

const editArticleReducer = createReducer<EditArticleStateModel>(
  initialState,
  /** --- editArticle --- */
  on(editArticleAction, (state) =>
    produce(state, (draft) => {
      draft.isSubmitting = true;
      draft.validationErrors = null;
    })
  ),
  on(editArticleSuccessAction, (state) =>
    produce(state, (draft) => {
      draft.isSubmitting = false;
    })
  ),
  on(editArticleFailureAction, (state, { errors }) =>
    produce(state, (draft) => {
      draft.isSubmitting = false;
      draft.validationErrors = errors;
    })
  ),
  /** --- getArticle --- */
  on(getArticleAction, (state) =>
    produce(state, (draft) => {
      draft.isLoading = true;
    })
  ),
  on(getArticleSuccessAction, (state, { article }) =>
    produce(state, (draft) => {
      draft.isLoading = false;
      draft.article = article;
    })
  ),
  on(getArticleFailureAction, (state) =>
    produce(state, (draft) => {
      draft.isLoading = false;
    })
  )
);

export const editArticleFeature = createFeature<StoreSlices, EditArticleStateModel>({
  name: StoreSlices.ARTICLE_EDIT,
  reducer: editArticleReducer,
});
