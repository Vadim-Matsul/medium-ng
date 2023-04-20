import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { TagFeedComponent } from './components/tagFeed/tagFeed.component';
import { HttpLinks } from '../shared/common/httpLinks';

export const TAG_SLUG = 'slug';

const routes: Routes = [{ path: `${HttpLinks.Tags}/:${TAG_SLUG}`, component: TagFeedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagFeedRoutingModule {}
