import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, type Observable } from 'rxjs';

import {
  authRequestModelSchema,
  type AuthRequestModel,
  type AuthResponseModel,
} from '../models/authHttp.model';
import {
  currentUserModelSchema,
  type CurrentUserModel,
} from 'src/app/shared/models/currentUser.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: AuthRequestModel): Observable<CurrentUserModel> {
    const api = environment.apiUrl + '/users';
    const body = authRequestModelSchema.parse(data);

    return this.http
      .post<AuthResponseModel>(api, body)
      .pipe(map((response) => currentUserModelSchema.parse(response.user)));
  }
}
