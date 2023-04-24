import { Component, EventEmitter, Input, Output, type OnInit } from '@angular/core';
import { FormBuilder, Validators, type FormGroup } from '@angular/forms';
import { BehaviorSubject, debounceTime, map, merge, shareReplay, type Observable } from 'rxjs';

import { ControlFormService } from 'src/app/shared/services/controlForm.service';
import { ZodService } from 'src/app/shared/services/zod.service';
import { articleUserFormModelSchema } from '../../models/articleUserForm.model';
import { type ArticleUserFormModel } from './../../models/articleUserForm.model';
import { type BackendErrorsModel } from 'src/app/shared/models/backendErrors.model';
import {
  articleFormModelSchema,
  type ArticleFormModel,
} from 'src/app/shared/models/posts/feed.model';

type Errors = BackendErrorsModel | null;

@Component({
  selector: 'ma-article-form',
  templateUrl: './articleForm.component.html',
  styleUrls: ['./articleForm.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  private errorsMapProps$ = new BehaviorSubject<Errors>(null);
  @Input('errorsMap') set _errorsMapSetter(value: Errors) {
    this.errorsMapProps$.next(value);
  }

  form: FormGroup;
  errors$: Observable<Errors>;

  @Input('initialValues') initialValuesProps: ArticleFormModel;
  @Input('isSubmitting') isSubmittingProps: boolean;

  @Output('articleSubmit') articleSubmitEvent = new EventEmitter<ArticleFormModel>();

  constructor(
    private fb: FormBuilder,
    private controlFormService: ControlFormService,
    private zodService: ZodService
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.initializeListeners();
  }

  private initializeForm() {
    const { title, description, body, tagList } = this.initialValuesProps;

    this.form = this.fb.group({
      title: [title, Validators.required],
      description: [description, Validators.required],
      body: [body, Validators.required],
      tagList: [tagList.join(' '), Validators.required],
    });
  }

  private initializeListeners() {
    const userFormErrors$ = this.form.valueChanges.pipe(
      debounceTime(300),
      this.controlFormService.getActiveFormErrors,
      map((activeFormFields) =>
        this.zodService.getErrorsMap(articleUserFormModelSchema.safeParse(activeFormFields))
      )
    );

    this.errors$ = merge(this.errorsMapProps$.asObservable(), userFormErrors$).pipe(
      shareReplay({ refCount: true })
    );
  }

  onFormSubmit() {
    const formValues = <ArticleUserFormModel>this.form.value;
    const someFieldsAreEmpty = Object.entries(formValues).some(([_, v]) => !v.trim());

    if (this.form.invalid || someFieldsAreEmpty) {
      return this.errorsMapProps$.next({
        'empty form': ['fields are required'],
      });
    }

    const { tagList, ...rest } = formValues;
    const normalizeForm: ArticleFormModel = articleFormModelSchema.parse({
      ...rest,
      tagList: tagList.trim().split(' '),
    });

    this.articleSubmitEvent.emit(normalizeForm);
  }
}
