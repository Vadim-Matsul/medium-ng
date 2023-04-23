import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FeedTogglerComponent } from './components/feedToggler/feedToggler.component';
import { ProfileTogglerComponent } from './components/profileToggler/profileToggler.component';
import { RouterLinkActiveWithoutQueryDirective } from '../../directives/routerLinkActiveWithoutQuery.directive';

@NgModule({
  imports: [
    /** system */
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
    /** components */
    FeedTogglerComponent,
    ProfileTogglerComponent,
    /** directives */
    RouterLinkActiveWithoutQueryDirective,
  ],
  exports: [FeedTogglerComponent, ProfileTogglerComponent],
})
export class FeedTogglerModule {}
