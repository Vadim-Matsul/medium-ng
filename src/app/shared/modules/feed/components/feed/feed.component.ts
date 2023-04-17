import { Component, Input, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { map, type Observable } from 'rxjs';

import { getFeedAction } from '../../store/actions/getFeed.actions';
import { type FeedStateModel } from '../../models/feedState.model';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { HttpLinks } from 'src/app/shared/common/httpLinks';
import { StoreEndpoints } from 'src/app/shared/store/endpoints';

@Component({
  selector: 'ma-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  HttpLinks = HttpLinks;

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

  private bindFeedData() {
    this.store.dispatch(getFeedAction({ shortUrl: this.apiUrlProps }));
  }

  private initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.currentPage$ = this.route.queryParams.pipe(
      map((params) => Number(params['page'] || '1'))
    );
  }
}
