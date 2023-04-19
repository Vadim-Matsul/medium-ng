import { Component, OnDestroy, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { type Subscription } from 'rxjs';

import { TAG_SLUG } from '../../tagFeed-routing.module';
import { StoreEndpoints } from 'src/app/shared/store/endpoints';

@Component({
  selector: 'ma-tag-feed',
  templateUrl: './tagFeed.component.html',
  styleUrls: ['./tagFeed.component.scss'],
})
export class TagFeedComponent implements OnInit, OnDestroy {
  apiUrl: string;
  tagName: string;
  #routeParamsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.initializeValues();
  }

  private initializeValues() {
    this.#routeParamsSubscription = this.route.params.subscribe((params) => {
      const tagName = <string | null>params[TAG_SLUG];
      // TODO: handle bad case without tagname
      if (!tagName) return;
      this.tagName = tagName;
      this.apiUrl = `${StoreEndpoints.ALL_FEEDS}?tag=${tagName}`;
    });
  }

  ngOnDestroy() {
    this.#routeParamsSubscription.unsubscribe();
  }
}
