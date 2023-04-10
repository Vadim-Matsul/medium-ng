import { Component, type OnInit } from '@angular/core';
import { FormBuilder, Validators, type FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AuthLinks } from '../../auth.module';
import { registerAction } from '../../store/actions/register.action';
import { registerFormDataSchema } from './register.model';

@Component({
  selector: 'ma-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  AuthLinks = AuthLinks;
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  formSubmit(event: SubmitEvent) {
    const value = registerFormDataSchema.parse(this.form.value);
    this.store.dispatch(registerAction(value));
  }
}
