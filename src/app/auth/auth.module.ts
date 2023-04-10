import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, type Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { RegisterComponent } from './components/register/register.component';

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
    StoreModule.forRoot({}),
  ],
  declarations: [RegisterComponent],
})
export class AuthModule {}
