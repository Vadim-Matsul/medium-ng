import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, type Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { RegisterEffect } from './store/effects/register.effect';
import { ZodErrorPipe } from '../shared/pipes/zodError.pipe';
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
  ],
  declarations: [RegisterComponent, ZodErrorPipe],
  providers: [AuthService],
})
export class AuthModule {}
