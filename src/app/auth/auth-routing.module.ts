import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpLinks } from '../shared/common/httpLinks';

const routes: Routes = [
  { path: HttpLinks.Register, component: RegisterComponent },
  { path: HttpLinks.Login, component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
