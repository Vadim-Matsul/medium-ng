import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import {
  followButtonResponseModelSchema,
  type FollowButtonResponseModel,
} from '../models/followButtonHttp.model';
import { StoreEndpoints } from 'src/app/shared/store/endpoints';
import { environment } from 'src/environments/environment';

@Injectable()
export class FollowButtonService {
  #apiUrl = `${environment.apiUrl}${StoreEndpoints.PROFILES}/slug/follow`;

  private getProfile(response: FollowButtonResponseModel) {
    return followButtonResponseModelSchema.parse(response).profile;
  }

  addFollow(articleSlug: string) {
    const api = this.#apiUrl.replace('slug', articleSlug);
    return this.http.post<FollowButtonResponseModel>(api, {}).pipe(map(this.getProfile));
  }

  removeFollow(articleSlug: string) {
    const api = this.#apiUrl.replace('slug', articleSlug);
    return this.http.delete<FollowButtonResponseModel>(api).pipe(map(this.getProfile));
  }

  constructor(private http: HttpClient) {}
}
