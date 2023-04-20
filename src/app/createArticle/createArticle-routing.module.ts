import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { CreateArticleComponent } from './components/createArticle/createArticle.component';
import { HttpLinks } from '../shared/common/httpLinks';

const routes: Routes = [
  {
    path: `${HttpLinks.Posts}/${HttpLinks.NewPost}`,
    component: CreateArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateArticleRoutingModule {}
