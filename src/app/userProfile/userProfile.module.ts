import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

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
  ],
  declarations: [UserProfileComponent],
  providers: [UserProfileService],
})
export class UserProfileModule {}
