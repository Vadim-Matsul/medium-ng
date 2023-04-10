import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { type AuthResponseModel } from '../models/authResponse.model';
import { type RegisterFormModel } from '../models/register.model';
import {
  currentUserModelSchema,
  type CurrentUserModel,
} from 'src/app/shared/models/currentUser.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterFormModel): Observable<CurrentUserModel> {
    const api = environment.apiUrl + '/users';

    return this.http
      .post<AuthResponseModel>(api, data)
      .pipe(map(response => currentUserModelSchema.parse(response.user)));
  }
}
