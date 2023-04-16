import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import {
  feedResponseModelSchema,
  type FeedResponseModel,
} from '../models/feedHttp.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(shortUrl: string) {
    const fullUrl = environment.apiUrl + shortUrl;

    return this.http
      .get<FeedResponseModel>(fullUrl)
      .pipe(map((response) => feedResponseModelSchema.parse(response)));
  }
}
