import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedComponent } from './components/feed/feed.component';

@NgModule({
  imports: [
    /** system */
    CommonModule,
    /** project */
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
})
export class FeedModule {}
