import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from './components/userProfile/userProfile.component';
import { HttpLinks } from '../shared/common/httpLinks';

export const PROFILE_SLUG = 'slug';
const routes: Routes = [
  { path: `${HttpLinks.Profiles}/:${PROFILE_SLUG}`, component: UserProfileComponent },
  {
    path: `${HttpLinks.Profiles}/:${PROFILE_SLUG}/${HttpLinks.Favorites}`,
    component: UserProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UserProfileRoutingModule {}
