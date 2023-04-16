import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed.service';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { StoreSlices } from '../../store/slices';
import { reducers } from './store/reducer';

@NgModule({
  imports: [
    /** system */
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature(StoreSlices.FEED, reducers),
    /** project */
  ],
  declarations: [FeedComponent],
  providers: [FeedService],
  exports: [FeedComponent],
})
export class FeedModule {}
