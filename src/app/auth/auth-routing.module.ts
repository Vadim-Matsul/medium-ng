import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';

export enum AuthLinks {
  Home = '/',
  Register = 'register',
  Login = 'login',
}

const routes: Routes = [
  { path: AuthLinks.Register, component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
