import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import {
  articleResponseModelSchema,
  type ArticleResponseModel,
} from '../models/posts/articleHttp.model';
import { StoreEndpoints } from '../store/endpoints';
import { environment } from 'src/environments/environment';

@Injectable()
export class ArticleService {
  #apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  fetchArticle(slug: string) {
    const api = `${this.#apiUrl}${StoreEndpoints.ALL_FEEDS}/${slug}`;

    return this.http
      .get<ArticleResponseModel>(api)
      .pipe(map((response) => articleResponseModelSchema.parse(response)));
  }
}
