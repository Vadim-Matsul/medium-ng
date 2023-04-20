import {
  Component,
  EventEmitter,
  Input,
  Output,
  type OnInit,
} from '@angular/core';
import { FormBuilder, type FormGroup } from '@angular/forms';

import { type ArticleUserFormModel } from '../../models/articleUserForm.model';
import { type BackendErrorsModel } from 'src/app/shared/models/backendErrors.model';
import { type ArticleFormModel } from 'src/app/shared/models/posts/feed.model';

@Component({
  selector: 'ma-article-form',
  templateUrl: './ArticleForm.component.html',
  styleUrls: ['./ArticleForm.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  form: FormGroup;

  @Input('initialValues') initialValuesProps: ArticleFormModel;
  @Input('isSubmitting') isSubmittingProps: boolean;
  @Input('errorsMap') errorsMapProps: BackendErrorsModel;

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<ArticleFormModel>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    const { title, description, body, tagList } = this.initialValuesProps;

    this.form = this.fb.group<ArticleUserFormModel>({
      title,
      description,
      body,
      tagList: tagList.join(' '),
    });
  }

  onFormSubmit() {
    // TODO: add validation
    this.articleSubmitEvent.emit(this.form.value);
  }
}
