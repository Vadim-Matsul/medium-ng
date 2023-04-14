import { Component, type OnInit } from '@angular/core';
import { FormBuilder, Validators, type FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { combineLatest, type Observable } from 'rxjs';
import { debounceTime, map, shareReplay } from 'rxjs/operators';

import { AuthLinks } from '../../auth-routing.module';
import { ZodService } from 'src/app/shared/services/zod.service';
import { registerAction } from '../../store/actions/register.actions';
import { type AuthStateModel } from '../../models/authState.model';
import { registerFormModelSchema } from '../../models/register/register.model';
import { registerRequestModelSchema } from '../../models/register/registerHttp.model';
import { type BackendErrorsModel } from 'src/app/shared/models/backendErrors.model';
import {
  errorMessagesSelector,
  isSubmittingSelector,
} from '../../store/selectors';

@Component({
  selector: 'ma-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  AuthLinks = AuthLinks;
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  errorMessages$: Observable<BackendErrorsModel | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AuthStateModel>,
    private zodService: ZodService
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.initializeValues();
  }

  private initializeForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
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
          registerFormModelSchema.safeParse(activeFormFields)
        )
      )
    );

    this.errorMessages$ = combineLatest([
      backendFormErrors$,
      userFormErrors$,
    ]).pipe(
      map(([backendErrors, userErrors]) => {
        const errorsMap = {
          ...(backendErrors ?? {}),
          ...(userErrors ?? {}),
        };

        return Object.keys(errorsMap).length ? errorsMap : null;
      }),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  formSubmit(event: SubmitEvent) {
    const request = registerRequestModelSchema.parse({ user: this.form.value });
    this.store.dispatch(registerAction({ request }));
  }
}
