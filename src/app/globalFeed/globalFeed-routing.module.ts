import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { GlobalFeedComponent } from './components/globalFeed/globalFeed.component';
import { HttpLinks } from '../shared/common/httpLinks';

const routes: Routes = [
  { path: HttpLinks.Root, component: GlobalFeedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlobalFeedRoutingModule {}
