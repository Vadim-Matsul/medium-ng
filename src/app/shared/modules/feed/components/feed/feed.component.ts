import {
  Component,
  Input,
  type OnChanges,
  type OnDestroy,
  type OnInit,
  type SimpleChanges,
} from '@angular/core';
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
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  currentPage = 1;
  HttpLinks = HttpLinks;
  #limit = environment.limit;
  #routerSubscription: Subscription;

  @Input('apiUrl') apiUrlProps: StoreEndpoints;

  isLoading$: Observable<FeedStateModel['isLoading']>;
  error$: Observable<FeedStateModel['error']>;
  feed$: Observable<FeedStateModel['data']>;
  baseUrl$: Observable<string>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnChanges(changes: SimpleChanges) {
    /** fetch feed by slug */
    const api_changes = changes['apiUrlProps'];
    const isApiUrlChanged =
      !api_changes.firstChange &&
      api_changes.currentValue !== api_changes.previousValue;

    if (!isApiUrlChanged) return;

    this.fetchFeedData();
  }

  private async initializeListeners() {
    /** fetch feed by query-params */
    this.#routerSubscription = this.route.queryParams
      .pipe(
        map((params) => Number(params['page'] || '1')),
        map((currentPage) => {
          this.currentPage = currentPage;
          this.fetchFeedData(currentPage);
        }),
        shareReplay({ bufferSize: 1, refCount: true })
      )
      .subscribe();
  }

  private initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
  }

  private fetchFeedData(currentPage: number = 1) {
    const parsedUrl = queryString.parseUrl(this.apiUrlProps);
    const offset = Math.max(currentPage * this.#limit - this.#limit, 0);

    const stringifiedParams = queryString.stringify({
      limit: this.#limit,
      offset,
      ...parsedUrl.query,
    });

    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;

    this.store.dispatch(getFeedAction({ shortUrl: apiUrlWithParams }));
  }

  ngOnDestroy() {
    this.#routerSubscription.unsubscribe();
  }
}
