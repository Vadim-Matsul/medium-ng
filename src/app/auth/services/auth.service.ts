import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { type AuthResponseModel } from '../models/auth.model';
import { type LoginRequestModel } from '../models/login/loginHttp.model';
import { type RegisterRequestModel } from '../models/register/registerHttp.model';
import {
  currentUserModelSchema,
  type CurrentUserModel,
} from 'src/app/shared/models/currentUser.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  private getUser(response: AuthResponseModel): CurrentUserModel {
    // TODO: add logic for bad parse
    return currentUserModelSchema.parse(response.user);
  }

  register(data: RegisterRequestModel) {
    const api = environment.apiUrl + '/users';
    return this.http.post<AuthResponseModel>(api, data).pipe(map(this.getUser));
  }

  login(data: LoginRequestModel) {
    const api = environment.apiUrl + '/users';
    return this.http.post<AuthResponseModel>(api, data).pipe(map(this.getUser));
  }
}
