import { Component, type OnDestroy, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { combineLatest, map, type Observable, type Subscription } from 'rxjs';

import { ARTICLE_SLUG } from '../../article-routing.module';
import { deleteArticleAction } from '../../store/actions/deleteArticle.actions';
import { getArticleAction } from '../../store/actions/getArticle.actions';
import { type ArticleStateModel } from '../../models/articleState.model';
import { articleSelector, errorMessageSelector, isLoadingSelector } from '../../store/selectors';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { HttpLinks } from 'src/app/shared/common/httpLinks';

@Component({
  selector: 'ma-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  isAuthor = false;
  article: ArticleStateModel['data'];
  HttpLinks = HttpLinks;
  #slug: string | null = null;
  #subscription: Subscription;

  isLoading$: Observable<ArticleStateModel['isLoading']>;
  error$: Observable<ArticleStateModel['error']>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  private async initializeValues() {
    this.#slug = this.route.snapshot.paramMap.get(ARTICLE_SLUG);
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorMessageSelector));
  }

  private async initializeListeners() {
    const article$ = this.store.pipe(select(articleSelector));
    const currentUser$ = this.store.pipe(select(currentUserSelector));

    this.#subscription = combineLatest([article$, currentUser$])
      .pipe(
        map(([article, currentUser]) => {
          this.article = article;

          if (!article || !currentUser) return;

          this.isAuthor =
            currentUser.username === article.author.username &&
            currentUser.bio === article.author.bio &&
            currentUser.image === article.author.image;
        })
      )
      .subscribe();
  }

  private fetchData() {
    if (this.#slug) {
      this.store.dispatch(getArticleAction({ slug: this.#slug }));
    }
  }

  deleteArticle() {
    if (this.#slug) {
      this.store.dispatch(deleteArticleAction({ slug: this.#slug }));
    }
  }

  ngOnDestroy() {
    this.#subscription.unsubscribe();
  }
}
