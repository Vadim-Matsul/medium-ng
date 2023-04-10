import { Component, type OnInit } from '@angular/core';
import { FormBuilder, Validators, type FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { AuthLinks } from '../../auth.module';
import { AuthService } from '../../services/auth.service';
import { registerAction } from '../../store/actions/register.action';
import { AuthStateModel } from '../../models/authState.model';
import { registerFormModelSchema } from '../../models/register.model';
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

  constructor(
    private fb: FormBuilder,
    private store: Store<AuthStateModel>,
    private authService: AuthService
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
  }

  formSubmit(event: SubmitEvent) {
    const value = registerFormModelSchema.parse(this.form.value);

    this.store.dispatch(registerAction(value));
    this.authService.register(value).subscribe(currentUser => {
      // TODO: implement
      console.log(currentUser);
    });
  }
}
