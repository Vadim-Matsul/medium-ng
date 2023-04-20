import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { YourFeedComponent } from './components/yourFeed/yourFeed.component';
import { HttpLinks } from '../shared/common/httpLinks';

const routes: Routes = [{ path: HttpLinks.Your_Feed, component: YourFeedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourFeedRoutingModule {}
