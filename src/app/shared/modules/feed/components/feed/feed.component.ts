import { Component, Input, type OnDestroy, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { map, shareReplay, type Observable, type Subscription } from 'rxjs';
import queryString from 'query-string';

import { getFeedAction } from '../../store/actions/getFeed.actions';
import { type FeedStateModel } from '../../models/feedState.model';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { HttpLinks } from 'src/app/shared/common/httpLinks';
import { StoreEndpoints } from 'src/app/shared/store/endpoints';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ma-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  HttpLinks = HttpLinks;
  #limit = environment.limit;
  #routerSubscription: Subscription;

  @Input('apiUrl') apiUrlProps: StoreEndpoints;

  isLoading$: Observable<FeedStateModel['isLoading']>;
  error$: Observable<FeedStateModel['error']>;
  feed$: Observable<FeedStateModel['data']>;
  currentPage$: Observable<number>;
  baseUrl$: Observable<string>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    this.bindFeedData();
    this.initializeValues();
  }

  ngOnDestroy() {
    this.#routerSubscription.unsubscribe();
  }

  private async bindFeedData() {
    this.#routerSubscription = this.getCurrentPage()
      .pipe(
        map((currentPage) => {
          const parsedUrl = queryString.parseUrl(this.apiUrlProps);
          const offset = Math.max(currentPage * this.#limit - this.#limit, 0);

          const stringifiedParams = queryString.stringify({
            limit: this.#limit,
            offset,
            ...parsedUrl.query,
          });

          const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;

          this.store.dispatch(getFeedAction({ shortUrl: apiUrlWithParams }));
        })
      )
      .subscribe();
  }

  private initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.currentPage$ = this.getCurrentPage();
  }

  private getCurrentPage() {
    return this.route.queryParams.pipe(
      map((params) => Number(params['page'] || '1')),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
}
