import { Component, type OnInit } from '@angular/core';

import { StoreEndpoints } from 'src/app/shared/store/endpoints';

@Component({
  selector: 'ma-globalFeed',
  templateUrl: './globalFeed.component.html',
  styleUrls: ['./globalFeed.component.scss'],
})
export class GlobalFeedComponent implements OnInit {
  StoreEndpoints = StoreEndpoints;
  ngOnInit() {}
}
