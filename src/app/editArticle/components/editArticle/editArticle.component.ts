import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, filter, map } from 'rxjs';

import { EDIT_ARTICLE_SLUG } from '../../editArticle-routing.module';
import { editArticleAction } from '../../store/actions/editArticle.actions';
import { getArticleAction } from '../../store/actions/getArticle.actions';
import { type EditArticleStateModel } from '../../models/editArticleState.model';
import {
  articleFormModelSchema,
  type ArticleFormModel,
} from 'src/app/shared/models/posts/feed.model';
import {
  articleSelector,
  errorMessagesSelector,
  isLoadingSelector,
  isSubmittingSelector,
} from '../../store/selectors';

@Component({
  selector: 'ma-edit-article',
  templateUrl: './editArticle.component.html',
  styleUrls: ['./editArticle.component.scss'],
})
export class EditArticleComponent implements OnInit {
  #slug: string | null;

  initialArticleValues$: Observable<ArticleFormModel>;
  isLoading$: Observable<EditArticleStateModel['isLoading']>;
  isSubmitting$: Observable<EditArticleStateModel['isSubmitting']>;
  errorMessagesMap$: Observable<EditArticleStateModel['validationErrors']>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    this.initializeValues();
    this.fetchData();
  }

  private initializeValues() {
    this.#slug = this.route.snapshot.paramMap.get(EDIT_ARTICLE_SLUG);
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.errorMessagesMap$ = this.store.pipe(select(errorMessagesSelector));

    this.initialArticleValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map(({ title, body, description, tagList }) =>
        articleFormModelSchema.parse({
          title,
          body,
          description,
          tagList,
        })
      )
    );
  }

  private fetchData() {
    if (this.#slug) {
      this.store.dispatch(getArticleAction({ slug: this.#slug }));
    }
  }

  onFormSubmit(event: ArticleFormModel) {
    if (!this.#slug) return;
    this.store.dispatch(editArticleAction({ articleFormData: event, slug: this.#slug }));
  }
}
