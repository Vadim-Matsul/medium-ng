import { Component } from '@angular/core';

import { type ArticleUserFormModel } from 'src/app/shared/modules/articleForm/models/articleUserForm.model';

@Component({
  selector: 'ma-create-article',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss'],
})
export class CreateArticleComponent {
  initFormValues = {
    title: 't',
    description: 'tt',
    body: 'tttt',
    tagList: ['1 ', '2 '],
  };

  onFormSubmit(event: ArticleUserFormModel) {}
}
