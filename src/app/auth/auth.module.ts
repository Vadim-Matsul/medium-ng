import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, type Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ErrorMessagesModule } from '../shared/modules/errorMessages/errorMessages.module';
import { RegisterComponent } from './components/register/register.component';
import { ZodService } from '../shared/services/zod.service';
import { AuthService } from './services/auth.service';
import { RegisterEffect } from './store/effects/register.effect';
import { StoreSlices } from '../shared/store/slices';
import { reducers } from './store/reducers';

export const AuthLinks = {
  Register: 'register',
  Login: 'login',
} as const;

const routes: Routes = [
  { path: AuthLinks.Register, component: RegisterComponent },
];

@NgModule({
  imports: [
    /** system */
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature(StoreSlices.AUTH, reducers),
    EffectsModule.forFeature([RegisterEffect]),
    /** project */
    ErrorMessagesModule,
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, ZodService],
})
export class AuthModule {}
