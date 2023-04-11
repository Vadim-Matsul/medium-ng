import { Component, type OnInit } from '@angular/core';
import { FormBuilder, Validators, type FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { type Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { type SafeParseReturnType } from 'zod';

import { AuthLinks } from '../../auth.module';
import { registerAction } from '../../store/actions/register.action';
import { authRequestModelSchema } from '../../models/authHttp.model';
import { type AuthStateModel } from '../../models/authState.model';
import {
  registerFormModelSchema,
  type RegisterFormModel,
} from '../../models/register.model';
import { isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'ma-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  AuthLinks = AuthLinks;
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  formErrors$: Observable<
    SafeParseReturnType<RegisterFormModel, RegisterFormModel>
  >;

  constructor(private fb: FormBuilder, private store: Store<AuthStateModel>) {}

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

    this.formErrors$ = this.form.valueChanges.pipe(
      debounceTime(300),
      map((value) => registerFormModelSchema.safeParse(value))
    );
  }

  private initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  formSubmit(event: SubmitEvent) {
    const request = authRequestModelSchema.parse({ user: this.form.value });
    this.store.dispatch(registerAction({ request }));
  }
}
