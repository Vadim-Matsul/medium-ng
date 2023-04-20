import { Component, type OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { type Observable } from 'rxjs';

import { createArticleAction } from '../../store/actions/createArticle.actions';
import { type CreateArticleStateModel } from '../../models/createArticleState.model';
import { ArticleFormModel } from 'src/app/shared/models/posts/feed.model';
import { errorMessagesSelector, isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'ma-create-article',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialFormValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  isSubmitting$: Observable<CreateArticleStateModel['isSubmitting']>;
  errorMessagesMap$: Observable<CreateArticleStateModel['validationErrors']>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initializeValues();
  }

  private initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.errorMessagesMap$ = this.store.pipe(select(errorMessagesSelector));
  }

  onFormSubmit(event: ArticleFormModel) {
    this.store.dispatch(createArticleAction({ articleFormData: event }));
  }
}
