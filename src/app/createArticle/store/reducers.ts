import { createFeature, createReducer, on } from '@ngrx/store';
import produce from 'immer';

import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from './actions/createArticle.actions';
import { type CreateArticleStateModel } from '../models/createArticleState.model';
import { StoreSlices } from 'src/app/shared/store/slices';

const initialState: CreateArticleStateModel = {
  isSubmitting: false,
  validationErrors: null,
};

const createArticleReducer = createReducer<CreateArticleStateModel>(
  initialState,
  /** --- createArticle --- */
  on(createArticleAction, (state) =>
    produce(state, (draft) => {
      draft.isSubmitting = true;
      draft.validationErrors = null;
    })
  ),
  on(createArticleSuccessAction, (state) =>
    produce(state, (draft) => {
      draft.isSubmitting = false;
    })
  ),
  on(createArticleFailureAction, (state, { errors }) =>
    produce(state, (draft) => {
      draft.isSubmitting = false;
      draft.validationErrors = errors;
    })
  )
);

export const createArticleFeature = createFeature<StoreSlices, CreateArticleStateModel>({
  name: StoreSlices.ARTICLE_FORM,
  reducer: createArticleReducer,
});
