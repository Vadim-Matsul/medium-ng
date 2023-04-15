import { Component, type OnInit } from '@angular/core';
import { FormBuilder, Validators, type FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import {
  combineLatest,
  debounceTime,
  map,
  shareReplay,
  type Observable,
} from 'rxjs';

import { ZodService } from 'src/app/shared/services/zod.service';
import { loginAction } from '../../store/actions/login.actions';
import { loginFormModelSchema } from '../../models/login/login.model';
import { loginRequestModelSchema } from '../../models/login/loginHttp.model';
import { type BackendErrorsModel } from 'src/app/shared/models/backendErrors.model';
import {
  errorMessagesSelector,
  isSubmittingSelector,
} from '../../store/selectors';
import { HttpLinks } from 'src/app/shared/common/httpLinks';

@Component({
  selector: 'ma-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  HttpLinks = HttpLinks;
  form: FormGroup;
  errorMessages$: Observable<BackendErrorsModel | null>;
  isSubmitting$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private zodService: ZodService
  ) {}

  ngOnInit() {
    this.initializeValues();
    this.initializeForm();
  }

  private initializeValues() {
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
  }

  private initializeForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.bindErrorsStream();
  }

  private bindErrorsStream() {
    const backendFormErrors$ = this.store.pipe(select(errorMessagesSelector));

    const userFormErrors$ = this.form.valueChanges.pipe(
      debounceTime(300),
      map((formValues: Record<string, string>) =>
        Object.fromEntries(
          Object.entries(formValues).filter(([_, value]) => Boolean(value))
        )
      ),
      map((activeFormFields) =>
        this.zodService.getErrorsMap(
          loginFormModelSchema.safeParse(activeFormFields)
        )
      )
    );

    this.errorMessages$ = combineLatest([
      backendFormErrors$,
      userFormErrors$,
    ]).pipe(
      map(([backendErrors, userErrors]) => {
        const draft = {
          ...(backendErrors ?? {}),
          ...(userErrors ?? {}),
        };

        return Object.keys(draft).length ? draft : null;
      }),
      shareReplay({ refCount: true })
    );
  }

  onSubmit(event: SubmitEvent) {
    const request = loginRequestModelSchema.parse({ user: this.form.value });
    this.store.dispatch(loginAction({ request }));
  }
}
