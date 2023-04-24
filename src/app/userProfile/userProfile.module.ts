import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BannerModule } from '../shared/modules/banner/banner.module';
import { ErrorMessagesModule } from '../shared/modules/errorMessages/errorMessages.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggler.module';
import { FollowButtonModule } from '../shared/modules/follow-button/follow-button.module';
import { LoaderModule } from '../shared/modules/loader/loader.module';
import { UserProfileRoutingModule } from './userProfile-routing.module';
import { UserProfileComponent } from './components/userProfile/userProfile.component';
import { UserProfileService } from './services/userProfile.service';
import { GetUserProfileEffect } from './store/effects/getUserProfile.effect';
import { userProfileFeature } from './store/reducers';

@NgModule({
  imports: [
    /** system */
    CommonModule,
    StoreModule.forFeature(userProfileFeature),
    EffectsModule.forFeature([GetUserProfileEffect]),
    /** project */
    UserProfileRoutingModule,
    LoaderModule,
    ErrorMessagesModule,
    BannerModule,
    FeedTogglerModule,
    FeedModule,
    FollowButtonModule,
  ],
  declarations: [UserProfileComponent],
  providers: [UserProfileService],
})
export class UserProfileModule {}
