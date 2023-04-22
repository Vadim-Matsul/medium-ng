import { Component, type OnInit } from '@angular/core';
import { FormBuilder, type FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import {
  Observable,
  debounceTime,
  filter,
  firstValueFrom,
  map,
  merge,
  shareReplay,
  tap,
} from 'rxjs';

import { ControlFormService } from 'src/app/shared/services/controlForm.service';
import { ZodService } from 'src/app/shared/services/zod.service';
import { logoutUserAction } from 'src/app/auth/store/actions/sync.actions';
import { updateUserAction } from 'src/app/auth/store/actions/updateUser.actions';
import { settingsFormModelSchema, type SettingsFormModel } from '../../models/settingsForm.model';
import { type SettingsStateModel } from '../../models/settingsState.model';
import { updateUserRequestModelSchema } from 'src/app/auth/models/update/registerHttp.model';
import {
  currentUserWithPasswordModelSchema,
  type CurrentUserModel,
} from 'src/app/shared/models/currentUser.model';
import { type RootStateModel } from 'src/app/shared/models/store/rootState.model';
import { errorMessagesSelector, isSubmittingSelector } from '../../store/selectors';
import { currentUserSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'ma-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  form: FormGroup;
  isLoading = true;
  currentUser: CurrentUserModel | null = null;

  isSubmitting$: Observable<SettingsStateModel['isSubmitting']>;
  errorMessages$: Observable<SettingsStateModel['validationErrors']>;

  constructor(
    private store: Store<RootStateModel>,
    private fb: FormBuilder,
    private zodService: ZodService
  ) {}

  ngOnInit() {
    this.initializeValues();
  }

  private initializeValues() {
    firstValueFrom(
      this.store.pipe(
        select(currentUserSelector),
        filter(Boolean),
        map((currentUser) => {
          this.isLoading = false;
          this.currentUser = currentUser;
          this.initializeForm();

          /** close stream */
          return null;
        })
      )
    );

    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  private initializeForm() {
    if (!this.currentUser) return;
    const { token, ...rest } = this.currentUser;
    this.form = this.fb.group<SettingsFormModel>({
      ...rest,
      password: '',
    });

    this.bindErrorsStream();
  }

  private bindErrorsStream() {
    const userErrors$ = this.form.valueChanges.pipe(
      debounceTime(300),
      map((activeFormFields) =>
        this.zodService.getErrorsMap(settingsFormModelSchema.safeParse(activeFormFields))
      )
    );

    const backendErrors$ = this.store.pipe(select(errorMessagesSelector));

    this.errorMessages$ = merge(userErrors$, backendErrors$).pipe(shareReplay({ refCount: true }));
  }

  onFormSubmit() {
    if (this.form.invalid) return;

    const updateUserData = currentUserWithPasswordModelSchema.parse({
      ...this.currentUser,
      ...this.form.value,
    });

    const request = updateUserRequestModelSchema.parse({ user: updateUserData });
    this.store.dispatch(updateUserAction({ request }));
  }

  logoutUser() {
    this.store.dispatch(logoutUserAction());
  }
}
