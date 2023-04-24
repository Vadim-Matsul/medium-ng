import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { FollowButtonComponent } from './components/follow-button/followButton.component';
import { FollowButtonService } from './services/followButton.service';
import { FollowEffect } from './store/effects/follow.effect';

@NgModule({
  imports: [
    /** system */
    CommonModule,
    EffectsModule.forFeature([FollowEffect]),
  ],
  declarations: [FollowButtonComponent],
  exports: [FollowButtonComponent],
  providers: [FollowButtonService],
})
export class FollowButtonModule {}
