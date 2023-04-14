import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ErrorMessagesModule } from '../shared/modules/errorMessages/errorMessages.module';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { PersistentService } from '../shared/services/persistent.service';
import { ZodService } from '../shared/services/zod.service';
import { AuthService } from './services/auth.service';
import { LoginEffect } from './store/effects/login.effect';
import { RegisterEffect } from './store/effects/register.effect';
import { StoreSlices } from '../shared/store/slices';
import { reducers } from './store/reducers';

@NgModule({
  imports: [
    /** system */
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(StoreSlices.AUTH, reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    /** project */
    AuthRoutingModule,
    ErrorMessagesModule,
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, ZodService, PersistentService],
})
export class AuthModule {}
