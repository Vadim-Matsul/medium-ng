import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FeedTogglerComponent } from './components/feedToggler/feedToggler.component';

@NgModule({
  imports: [
    /** system */
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [FeedTogglerComponent],
  exports: [FeedTogglerComponent],
})
export class FeedTogglerModule {}
