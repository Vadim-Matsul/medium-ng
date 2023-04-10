import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, type Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { RegisterComponent } from './components/register/register.component';
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
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature(StoreSlices.AUTH, reducers),
  ],
  declarations: [RegisterComponent],
})
export class AuthModule {}
