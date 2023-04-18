import { Component } from '@angular/core';

import { StoreEndpoints } from 'src/app/shared/store/endpoints';

@Component({
  selector: 'ma-your-feed',
  templateUrl: './yourFeed.component.html',
  styleUrls: ['./yourFeed.component.scss'],
})
export class YourFeedComponent {
  StoreEndpoints = StoreEndpoints;
}
