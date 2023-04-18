import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, type Observable } from 'rxjs';

import {
  popularTagsResponseModelSchema,
  type PopularTagsResponseModel,
} from '../models/popularTagsHttp.model';
import { type PopularTagsModel } from 'src/app/shared/models/popularTag.model';
import { StoreEndpoints } from 'src/app/shared/store/endpoints';
import { environment } from 'src/environments/environment';

@Injectable()
export class PopularTagsService {
  #baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagsModel> {
    const api = this.#baseUrl + StoreEndpoints.POPULAR_TAGS;

    return this.http
      .get<PopularTagsResponseModel>(api)
      .pipe(
        map((response) => popularTagsResponseModelSchema.parse(response).tags)
      );
  }
}
