import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FeedTogglerComponent } from './components/feedToggler/feedToggler.component';
import { RouterLinkActiveWithoutQueryDirective } from '../../directives/routerLinkActiveWithoutQuery.directive';

@NgModule({
  imports: [
    /** system */
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [FeedTogglerComponent, RouterLinkActiveWithoutQueryDirective],
  exports: [FeedTogglerComponent],
})
export class FeedTogglerModule {}
