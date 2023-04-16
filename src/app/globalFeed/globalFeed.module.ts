import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedModule } from '../shared/modules/feed/feed.module';
import { GlobalFeedRoutingModule } from './globalFeed-routing.module';
import { GlobalFeedComponent } from './components/globalFeed/globalFeed.component';

@NgModule({
  imports: [
    /** system */
    CommonModule,
    /** project */
    GlobalFeedRoutingModule,
    FeedModule,
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
