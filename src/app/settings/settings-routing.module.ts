import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { SettingsComponent } from './components/settings/settings.component';
import { HttpLinks } from '../shared/common/httpLinks';

const routes: Routes = [
  {
    path: `${HttpLinks.Settings}`,
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
