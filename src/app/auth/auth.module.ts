import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, type Routes } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';

export const AuthLinks = {
  Register: 'register',
} as const;

const routes: Routes = [
  { path: AuthLinks.Register, component: RegisterComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [RegisterComponent],
})
export class AuthModule {}
