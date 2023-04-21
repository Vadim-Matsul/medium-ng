import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { EditArticleComponent } from './components/editArticle/editArticle.component';
import { HttpLinks } from '../shared/common/httpLinks';

export const EDIT_ARTICLE_SLUG = 'slug';
const routes: Routes = [
  {
    path: `${HttpLinks.Posts}/:${EDIT_ARTICLE_SLUG}/${HttpLinks.Edit}`,
    component: EditArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditArticleRoutingModule {}
