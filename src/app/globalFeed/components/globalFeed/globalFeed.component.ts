import { Component } from '@angular/core';

import { StoreEndpoints } from 'src/app/shared/store/endpoints';

@Component({
  selector: 'ma-global-feed',
  templateUrl: './globalFeed.component.html',
  styleUrls: ['./globalFeed.component.scss'],
})
export class GlobalFeedComponent {
  StoreEndpoints = StoreEndpoints;
}
