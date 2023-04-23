import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import {
  userProfileResponseModelSchema,
  type UserProfileResponseModel,
} from '../models/userProfileHttp.model';
import { authorModelSchema } from 'src/app/shared/models/author.model';
import { StoreEndpoints } from 'src/app/shared/store/endpoints';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserProfileService {
  #apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getProfile(response: UserProfileResponseModel) {
    const { profile } = userProfileResponseModelSchema.parse(response);
    return authorModelSchema.parse(profile);
  }

  getUserProfile(userSlug: string) {
    const api = `${this.#apiUrl}${StoreEndpoints.PROFILES}/${userSlug}`;
    return this.http.get<UserProfileResponseModel>(api).pipe(map(this.getProfile));
  }
}
