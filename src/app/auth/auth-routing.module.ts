import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export enum AuthLinks {
  Home = '/',
  Register = 'register',
  Login = 'login',
}

const routes: Routes = [
  { path: AuthLinks.Register, component: RegisterComponent },
  { path: AuthLinks.Login, component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
