import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './components/article/article.component';
import { HttpLinks } from '../shared/common/httpLinks';

export const ARTICLE_SLUG = 'slug';
const routes: Routes = [
  { path: `${HttpLinks.Posts}/:${ARTICLE_SLUG}`, component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ArticleRoutingModule {}
