import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { type AuthResponseModel } from '../models/authHttp.model';
import { type LoginRequestModel } from '../models/login/loginHttp.model';
import { type RegisterRequestModel } from '../models/register/registerHttp.model';
import { type UpdateUserRequestModel } from '../models/update/registerHttp.model';
import { currentUserModelSchema } from 'src/app/shared/models/currentUser.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  #apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  private getUser(response: AuthResponseModel) {
    return currentUserModelSchema.parse(response.user);
  }

  register(data: RegisterRequestModel) {
    const api = this.#apiUrl + '/users';
    return this.http.post<AuthResponseModel>(api, data).pipe(map(this.getUser));
  }

  login(data: LoginRequestModel) {
    const api = this.#apiUrl + '/users/login';
    return this.http.post<AuthResponseModel>(api, data).pipe(map(this.getUser));
  }

  fetchUserByToken() {
    const api = this.#apiUrl + '/user';
    return this.http.get<AuthResponseModel>(api).pipe(map(this.getUser));
  }

  updateUserData(currentUserData: UpdateUserRequestModel) {
    const api = this.#apiUrl + '/user';
    return this.http.put<AuthResponseModel>(api, currentUserData).pipe(map(this.getUser));
  }
}
