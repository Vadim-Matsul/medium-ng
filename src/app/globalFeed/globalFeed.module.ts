import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';
import { GlobalFeedRoutingModule } from './globalFeed-routing.module';
import { GlobalFeedComponent } from './components/globalFeed/globalFeed.component';

@NgModule({
  imports: [
    /** system */
    CommonModule,
    /** project */
    GlobalFeedRoutingModule,
    FeedModule,
    BannerModule,
    PopularTagsModule,
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
